var expect = require('chai').expect;
var Checker = require('../../../public/js/checker');

describe('Checker', function () {
  describe('#whitelist', function () {
    it('should pass when the code contains the construct', function () {
      var code = `
        for (var i = 0; i < 10; i++) {
          console.log(i);
        }
      `;

      var checker = new Checker(code);
      var whitelist = ['ForStatement'];
      expect(checker.whitelist(whitelist)).to.equal(true);
    });

    it("should fail when the code doesn't contain the construct");
  });

  describe('#blacklist', function () {
    it("should pass when the code doesn't contain the construct");
    it('should fail when the code contains the construct');
  });

  describe('#structure', function () {
    it('should pass when the code contains the structure');
    it("should fail when the code doesn't contain the structure");
  });

  describe('#query', function () {
    it('should pass when the query returns a node');
    it("should fail when the query doesn't return a node");
  });
});
