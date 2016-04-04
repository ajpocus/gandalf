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

    it("should fail when the code doesn't contain the construct", function () {
      var code = 'var a = 42;';

      var checker = new Checker(code);
      var whitelist = ['ForStatement'];
      expect(checker.whitelist(whitelist)).to.equal(false);
    });
  });

  describe('#blacklist', function () {
    it("should pass when the code doesn't contain the construct", function () {
      var code = 'var a = 42;';
      var checker = new Checker(code);
      var blacklist = ['ForStatement'];
      expect(checker.blacklist(blacklist)).to.equal(true);
    });

    it('should fail when the code contains the construct', function () {
      var code = `
        for (var i = 0; i < 10; i++) {
          console.log(i);
        }
      `;

      var checker = new Checker(code);
      var blacklist = ['ForStatement'];
      expect(checker.blacklist(blacklist)).to.equal(false);
    });
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
