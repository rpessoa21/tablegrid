// include the required packages. 
var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

// ================================
// STYLUS
// ================================
gulp.task('stylus', function() {
  return gulp.src('./assets/stylus/*.styl')
  .pipe(stylus({
    // compress: true
  }))
  .pipe(gulp.dest('./'));
});


// ================================
// JADE
// ================================
gulp.task('jade', function() {
  gulp.src('./assets/jade/**/*.jade')
    .pipe(jade({
        locals: {
          title: 'OMG THIS IS THE TITLE'
        },
        pretty: true
     }))
     .pipe(gulp.dest('./'));
});


// ================================
// UGLIFY
// ================================
gulp.task('js', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./'));
});


// ================================
// WATCH
// ================================
gulp.task('watch', function() {
	gulp.watch('./assets/stylus/*.styl', ['stylus']);
	gulp.watch('./assets/jade/**/*.jade', ['jade']);
  gulp.watch('assets/js/*.js', ['js']);
});


// ================================
// DEFAULT
// ================================
gulp.task('default', ['watch']);