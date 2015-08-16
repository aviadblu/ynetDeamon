'use strict';

var _ = require('underscore');
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var plumber = require('gulp-plumber');
var assets = require('../assets');

module.exports = function(options) {
  return function() {
    var js = _.union(assets.clientJs, assets.serverJs);
    return gulp.src(js)
      .pipe(plumber({
        errorHandler: require('../error.beep')
      }))
      .pipe(jscs({
        preset: 'airbnb'
      }));
  };
};
