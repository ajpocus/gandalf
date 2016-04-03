var esprima = require('esprima');
var estraverse = require('estraverse');

function Checker(code) {
  this.code = code;
}

Checker.prototype.whitelist = function (whitelist) {
  var ast = esprima.parse(this.code);
  estraverse.traverse(ast, {
    enter: function (node, parent) {
      for (var i = 0; i < whitelist.length; i++) {
        var type = whitelist[i];
        if (node.type === type) {
          return true;
        }
      }
    }
  });
};

Checker.prototype.blacklist = function (blacklist) {

};

Checker.prototype.checkStructure = function (structure) {

};

Checker.prototype.query = function (query) {

};

exports = module.exports = Checker;
