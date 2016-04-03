var esprima = require('esprima');

function Checker(code) {
  this.code = code;
}

Checker.prototype.whitelist = function (whitelist) {
  return false;
};

Checker.prototype.blacklist = function (blacklist) {

};

Checker.prototype.checkStructure = function (structure) {

};

Checker.prototype.query = function (query) {

};

exports = module.exports = Checker;
