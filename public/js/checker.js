var esprima = require('esprima');
var estraverse = require('estraverse');
var Walker = require('./walker');

function Checker(code) {
  this.code = code;
}

Checker.prototype.whitelist = function (whitelist) {
  var ast = esprima.parse(this.code);
  var result = false;
  Walker.walk(ast, function (node) {
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
  var ast = esprima.parse(this.code);
  var result = true;
  Walker.walk(ast, function (node) {
    for (var i = 0; i < blacklist.length; i++) {
      var type = blacklist[i];
      if (node.type === type) {
        result = false;
      }
    }
  });

  return result;
};

Checker.prototype.checkStructure = function (structure) {

};

Checker.prototype.query = function (query) {

};

exports = module.exports = Checker;
