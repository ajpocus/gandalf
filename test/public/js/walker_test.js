var esprima = require('esprima');
var expect = require('chai').expect;
var Walker = require('../../../public/js/walker');

describe('Walker', function () {
  describe('#walk', function () {
    it('should walk the tree', function () {
      var code = `
        for (var i = 0; i < 10; i++) {
          console.log(i);
        }
      `;

      var ast = esprima.parse(code);
      var nodes = [];

      Walker.walk(ast, function (node) {
        nodes.push(node);
      }, function () {
        console.log('done');
      });

      expect(nodes[0].type).to.equal('ForStatement');
    });
  });
});
