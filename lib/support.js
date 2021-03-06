/*
 * nomo.js
 *
 * Copyright (c) 2012 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

var path    = require('path');

var modules = ['util', 'events', 'assert'];

exports.has = function (name) {
  return modules.indexOf(name) !== -1;
};

exports.folder = path.normalize(__dirname + '/../support');
