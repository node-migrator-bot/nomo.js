var test      = require('utest');
var assert    = require('assert');

var module    = require('../lib/module');
var fs        = require('fs');


test('module.readScript', {

  'should read module script file and return as string': function () {
    var expectation = fs.readFileSync('test/fixture/index.js').toString();
    var m = module('test/fixture');
    
    var script = m.readScript();
    
    assert.equal(script, expectation)
  }

});
