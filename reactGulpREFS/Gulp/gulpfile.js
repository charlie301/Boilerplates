/* ============================================================================
               NOT PRODUCTION CODE -
               TEMPLATE TO ASSIST IN INTERGRATING GULP INTO PROJECTS
==============================================================================*/

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver');

var src = './process',
    app = './builds/app';

//Transform the jsx
gulp.task('js', function() {
  //Identify the main JSX container folder - which pulls in all the componets
  return gulp.src( src + '/js/app.js' )
    .pipe(browserify({
      transform: 'reactify',  //transforms jsx to JS
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js')); //endpoint for the JSX process.
});

//Start if where HTML would normally be minified
gulp.task('html', function() {
  gulp.src( app + '/**/*.html');
});

//Start of where SASS where would normally be compiled and concatendatewd
gulp.task('css', function() {
  gulp.src( app + '/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch( src + '/js/**/*', ['js']);
  gulp.watch( app + '/css/**/*.css', ['css']);
  gulp.watch([ app + '/**/*.html'], ['html']);
});

//Broswer live reload
gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
