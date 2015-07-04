var main = require('./package.json').main;

var gulp = require('gulp');
var browserify = require('browserify');
var mocha = require('gulp-mocha');
var insert = require('gulp-insert');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var exorcist = require('exorcist');

gulp.task('watch', function() {
	gulp.watch('./src/*.js', ['build']);
});

gulp.task('watch-test', function() {
	gulp.watch('./src/*.js', ['build', 'test']);
});

gulp.task('build', function() {
	var bundler = browserify({
        entries: [main],
		debug: true,
        standalone: 'firesync'
	}).transform(babelify.configure({
		optional: ['runtime']
	}));

    bundler.bundle()
		.pipe(exorcist('./dist/firesync.js.map'))
        .pipe(source(main))
        .pipe(rename('./firesync.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('test', function() {
	gulp.src('./test/firesync.js')
		.pipe(mocha());
});
