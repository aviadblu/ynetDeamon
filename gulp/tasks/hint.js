'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var plumber = require('gulp-plumber');

module.exports = function(options) {
  return function() {
    return gulp.src(require('../assets').clientJs)
      .pipe(plumber({
        errorHandler: require('../error.beep')
      }))
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter('fail'));
  };
}
