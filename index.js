var hoek    = require('hoek');
var async   = require('async');
var chalk   = require('chalk');
var Promise = require('bluebird');
var is      = require('is');
var string  = require('string');
var glob    = require('glob');
var path    = require('path');
var url     = require('url');
var util    = require('util');
var fs      = require('graceful-fs');
var request = require('request');

var finder  = require('./lib/finder').bind(exports);
var random  = require('./lib/random');
var noop    = function() {};

// Copy over Hoek utilities
for (var i in hoek) {
  if (hoek.hasOwnProperty(i)) {
    exports[i] = hoek[i];
  }
}

// # External Modules
exports.Promise  = Promise;
exports.chalk    = chalk;
exports.glob     = glob;
exports.string   = string;
exports.is       = is;
exports.async    = async;
exports.finder   = finder;
exports.fs       = fs;
exports.request  = request;

//# Node Modules
exports.path     = path;
exports.url      = url;
exports.inherits = util.inherits;
exports.inspect  = util.inspect;

//# Additional Methods
exports.noop     = noop;
exports.defaults = exports.applyToDefaults;
exports.random   = random;
