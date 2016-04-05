var Walker = {
  walk: function walk(ast, cb) {
    var firstNode = ast.body;
    var unvisitedNodes = [ firstNode ];

    while (unvisitedNodes.length) {
      var body = unvisitedNodes.pop();

      if (body.constructor === Array) {
        for (var i = 0; i < body.length; i++) {
          var node = body[i];
          cb(node);
          if (node.body) {
            unvisitedNodes.push(node.body);
          }
        }
      } else {
        cb(body);
      }
    }
  }
};

exports = module.exports = Walker;
