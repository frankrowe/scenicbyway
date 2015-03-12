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
  , bump = require('gulp-bump')
  , handlebars = require('gulp-compile-handlebars')
  , fs = require('fs')

var getPackageJson = function () {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8'))
}

var paths = {
  css: ['./css/src/style.less'],
  app_js: ['./js/src/app.js'],
  js: ['./js/src/**/*.js'],
}

gulp.task('bump', function(){
  gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
})

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

gulp.task('handlebars', function(){
  var package = getPackageJson()
  gulp.src('./templates/index.hbs')
    .pipe(handlebars(package, {}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
})

gulp.task('watch', function() {
  gulp.watch(paths.css, ['bump', 'css', 'handlebars'])
  gulp.watch(paths.js, ['bump', 'js', 'handlebars'])
})

gulp.task('default', ['watch', 'bump', 'css', 'js', 'handlebars'])
gulp.task('prod', ['bump', 'css', 'js', 'compress', 'handlebars'])