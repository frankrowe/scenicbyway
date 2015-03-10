/* gulpfile.js */
 
// Load some modules which are installed through NPM.
var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');
var del = require('del')
var less = require('gulp-less')
var path = require('path')
 
// Define some paths.
var paths = {
  css: ['./css/src/style.less'],
  app_js: ['./js/src/app.js'],
  js: ['./js/src/**/*.js'],
};

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(less({
      paths: [ './css/src', './node_modules/bootstrap/less' ]
    }))
    .pipe(gulp.dest('./css/'));
});
 
// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('js', function() {
  // Browserify/bundle the JS.
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js'));
});
 
// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.js, ['js']);
});
 
// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'css', 'js']);