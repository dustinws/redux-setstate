var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');

gulp.task('clean', function () {
  return gulp
    .src('dist')
    .pipe(clean());
});

gulp.task('build', function () {
  return gulp
    .src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel({ presets: ['react', 'es2015', 'stage-0'] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*', ['build']);
});
