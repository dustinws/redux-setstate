var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('clean', function () {
  return gulp
    .src('dist')
    .pipe(clean());
});

gulp.task('build-node', function () {
  return gulp
    .src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel({ presets: ['react', 'es2015', 'stage-0'] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-browser', ['build-node'], function () {
  return gulp
    .src('dist/index.js')
    .pipe(plumber())
    .pipe(browserify({
      insertGlobals: false,
      sourceType: 'module',
      external: ['react', 'react-redux'],
      standalone: 'ReduxSetState',
    }))
    .pipe(concat('redux-setstate.min.js'))
    .pipe(uglify({ mangle: true }))
    .pipe(gulp.dest('.'));
});

gulp.task('build', ['build-browser']);

gulp.task('watch', function () {
  gulp.watch('src/**/*', ['build']);
});
