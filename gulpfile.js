var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('mincss', function() {
	gulp.src('css/src/*.css')
	.pipe(concat('style.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('css/dist/'));
});

gulp.task('scripts', function() {

	gulp.src('js/src/*.js')
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js/dist/'));
});

gulp.task('default', function() {
    gulp.start('mincss', 'scripts');
    gulp.watch('js/src/*.js', ['scripts']);
    gulp.watch('css/src/*.css', ['mincss']);
});