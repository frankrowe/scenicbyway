/* gulpfile.js */

var gulp = require('gulp')
  , browserify = require('browserify')
  , uglify = require('gulp-uglify')
  , reactify = require('reactify')
  , source = require('vinyl-source-stream')
  , rename = require("gulp-rename")
  , del = require('del')
  , less = require('gulp-less')
  , path = require('path')

var paths = {
  css: ['./css/src/style.less'],
  app_js: ['./js/src/app.js'],
  js: ['./js/src/**/*.js'],
}

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(less({
      paths: [ './css/src', './node_modules/bootstrap/less' ]
    }))
    .pipe(gulp.dest('./css/'))
})

gulp.task('js', function() {
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js'))
})

gulp.task('compress', function() {
  gulp.src('./js/bundle.js')
    .pipe(uglify())
    .pipe(rename('./bundle.min.js'))
    .pipe(gulp.dest('./js'))
})

gulp.task('watch', function() {
  gulp.watch(paths.css, ['css'])
  gulp.watch(paths.js, ['js'])
})

gulp.task('default', ['watch', 'css', 'js'])
gulp.task('prod', ['css', 'js', 'compress'])