var debounce = require('debounce');
var Checker = require('./checker');

$(function () {
  var $code = $('#code');
  var checker = new Checker($code.val());
  updateWhitelist(checker);
  updateBlacklist(checker);
  updateQuery(checker);

  $('#code').keyup(debounce(function (ev) {
    var $code = $(this);
    var checker = new Checker($code.val());
    updateWhitelist(checker);
    updateBlacklist(checker);
    updateQuery(checker);
  }, 400));

  $('#whitelist').keyup(debounce(function (ev) {
    var $code = $('#code');
    var checker = new Checker($code.val());
    updateWhitelist(checker);
  }, 400));

  $('#blacklist').keyup(debounce(function (ev) {
    var $code = $('#code');
    var checker = new Checker($code.val());
    updateBlacklist(checker);
  }, 400));

  $('#query').keyup(debounce(function (ev) {
    var $code = $('#code');
    var checker = new Checker($code.val());
    updateQuery(checker);
  }, 400));

  function updateWhitelist(checker) {
    var $whitelist = $('#whitelist');
    var whitelistQuery = $whitelist.val().split(',');
    var result = checker.whitelist(whitelistQuery);
    var $status = $whitelist.siblings('.status');
    $status.html(result.toString());
  }

  function updateBlacklist(checker) {
    var $blacklist = $('#blacklist');
    var blacklistQuery = $blacklist.val().split(',');
    var result = checker.blacklist(blacklistQuery);
    var $status = $blacklist.siblings('.status');
    $status.html(result.toString());
  }

  function updateQuery(checker) {
    var $query = $('#query');
    var query = $query.val();
    var result = checker.query(query);
    var $status = $query.siblings('.status');
    $status.html(result.toString());
  }
});
