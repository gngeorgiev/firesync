var gulp = require('gulp');
var browserify = require('browserify');
var mocha = require('gulp-mocha');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var exorcist = require('exorcist');
var plumber = require('gulp-plumber');

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/*.js', ['build'], {partial: true});
});

gulp.task('watch:test', function () {
    gulp.watch(['./src/*.js', './test/*.js'], ['build', 'test'], {partial: true});
});

gulp.task('build', function () {
    var main = './src/firesync.js';

    var bundler = browserify({
        entries: [main],
        debug: true,
        standalone: 'firesync'
    }).transform(babelify.configure({
        optional: ['runtime']
    }));

    bundler.bundle()
        .pipe(plumber())
        .pipe(exorcist('./dist/firesync.js.map'))
        .pipe(source(main))
        .pipe(rename('./firesync.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('test', ['build'], function () {
    gulp.src('./test/firesync-test.js')
        .pipe(mocha())
        .once('end', function () {
            process.exit();
        });
});
