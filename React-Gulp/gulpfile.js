var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

//Paths object
var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

/* DEV TASKS
================*/

//Transform JSX to JS
gulp.task('transform', function(){
     gulp.src(path.JS)
          .pipe(react())
          .pipe(gulp.dest(path.DEST_SRC));
});

//Copy HTML over to dist this
gulp.task('copy', function(){
     gulp.src(path.HTML)
          .pipe(gulp.dest(path.DEST));
});

//Watch files for change
gulp.task('watch', function(){
     gulp.watch(path.ALL, ['transform', 'copy']);
});

//Set default task as watch
gulp.task('default', ['watch']);


/* PRODUCTION TASKS
=====================*/

//concat JS files on final build
gulp.task('build', function(){
     gulp.src(path.JS)
          .pipe(react())
          .pipe(concat(path.MINIFIED_OUT))
          .pipe(uglify(path.MINIFIED_OUT))
          .pipe(gulp.dest(path.DEST_BUILD));
});

//rename js file on build to save manual changes
gulp.task('replaceHTML', function(){
     gulp.src(path.HTML)
          .pipe(htmlreplace({
               'js': 'build/' + path.MINIFIED_OUT
          }))
          .pipe(gulp.dest(path.DEST));
});

//Production command
gulp.task('build', ['replaceHTML', 'build']);
