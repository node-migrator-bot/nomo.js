var test      = require('utest');
var assert    = require('assert');

var module    = require('../lib/module');


test('module', {

  'should throw if path is missing': function () {
    assert.throws(function () {
      module();
    }, 'TypeError');
  },

  'should throw if file does not exist': function () {
    assert.throws(function () {
      module('some/unknown/path');
    }, 'Error');
  },

  'should throw if directory has no index.js or package.json': function () {
    assert.throws(function () {
      module('test/fixture/lib');
    }, 'Error');
  },

  'should set script to file': function () {
    var m = module('test/fixture/a.js');

    assert.equal('test/fixture/a.js', m.script);
  },

  'should set script to index.js': function () {
    var m = module('test/fixture');

    assert.equal('test/fixture/index.js', m.script);
  },

  'should set script to main file in package.json': function () {
    var m = module('test/fixture/node_modules/c');

    assert.equal('test/fixture/node_modules/c/c.js', m.script);
  },

  'should throw if main file in package.json does not exist': function () {
    assert.throws(function () {
      module('test/fixture/broken');
    }, 'Error');
  }

});
