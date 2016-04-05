var esprima = require('esprima');
var esquery = require('esquery');
var Walker = require('./walker');

function Checker(code) {
  this.code = code;
  this.ast = esprima.parse(this.code);
}

Checker.prototype.whitelist = function (whitelist) {
  var result = false;
  Walker.walk(this.ast, function (node) {
    for (var i = 0; i < whitelist.length; i++) {
      var type = whitelist[i];
      if (node.type === type) {
        result = true;
      }
    }
  });

  return result;
};

Checker.prototype.blacklist = function (blacklist) {
  var result = true;
  Walker.walk(this.ast, function (node) {
    for (var i = 0; i < blacklist.length; i++) {
      var type = blacklist[i];
      if (node.type === type) {
        result = false;
      }
    }
  });

  return result;
};

Checker.prototype.query = function (query) {
  var selectorAst = esquery.parse(query);
  var matches = esquery.match(this.ast, selectorAst);
  return matches.length !== 0;
};

exports = module.exports = Checker;
