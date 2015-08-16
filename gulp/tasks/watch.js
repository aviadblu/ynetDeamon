'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function(options) {
  return function() {
    var clientWatcher = gulp.watch(require('../assets').clientJs, ['codestyleclient', 'hint']);
    var clientWatcherSass = gulp.watch(require('../assets').clientSass, ['sass']);
    var clientWatcherHtml = gulp.watch(require('../assets').clientHtml, ['htmlcopy']);
  };
};
