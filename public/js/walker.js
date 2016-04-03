var Walker = {
  walk: function walk(ast, cb) {
    var body = ast.body;
    if (body.constructor === Array) {
      for (var i = 0; i < body.length; i++) {
        var node = body[i];
        cb(node);
        if (node.body) {
          walk(node.body, cb);
        }
      }
    } else {
      cb(body);
      walk(body);
    }
  }
};

exports = module.exports = Walker;
