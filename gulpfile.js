var argv = require('minimist')(process.argv.slice(2));
var tasks = argv._;

// Figure out if we want to watch our files for changes or not
// If the user ran a 'build' or 'package' task, then we do NOT want to watch them
var watchFiles = tasks.indexOf('build') === -1 && tasks.indexOf('package') === -1;

// If the user ran the 'package' task, then we can uglify the files
var uglifyFiles = tasks.indexOf('package') > -1;

var gulp = require('./gulp')([
  'browserify-events',
  'browserify-content',
  'browserify-menu',
  'codestyle',
  'codestyleclient',
  'hint',
  'sass',
  'htmlcopy',
  'watch'
], {
  watchify: watchFiles,
  uglify: uglifyFiles
});

gulp.task('build', ['hint', 'sass', 'htmlcopy', 'browserify-content', 'browserify-menu', 'browserify-events']);
gulp.task('default', ['build', 'watch']);
gulp.task('package', ['build']);
