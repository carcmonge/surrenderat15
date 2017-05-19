'use strict';

var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    cssmin    = require('gulp-cssmin'),
    rename    = require('gulp-rename'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    prefix    = require('gulp-autoprefixer'),
    config    = require('./config.json');

console.log(config.css);

// Configure CSS task.
gulp.task('css', function () {
  return gulp.src(config.css)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 5 versions'))
    .pipe(cssmin())
    .pipe(concat('public/css/style.css', {newLine: ''}))
    .pipe(gulp.dest('.'));
});

// Configure JS task.
gulp.task('js', function() {
  return gulp.src(config.js)
    .pipe(uglify({mangle: false}))
    .pipe(concat('main.js', {newLine: ''}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss', ['css']);
  gulp.watch('src/js/main.js', ['js']);
  gulp.watch('./config.json', [ 'css', 'js' ]);
});

gulp.task('default', ['css', 'js']);