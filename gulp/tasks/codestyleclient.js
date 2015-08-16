'use strict';

var _ = require('underscore');
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var plumber = require('gulp-plumber');
var assets = require('../assets');

module.exports = function(options) {
  return function() {
    return gulp.src(assets.clientJs)
      .pipe(plumber({
        errorHandler: require('../error.beep')
      }))
      .pipe(jscs({
        preset: 'airbnb'
      }));
  };
};
