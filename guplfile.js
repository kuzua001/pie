/**
 * Created by Иван on 31.05.2017.
 */

var gulp         = require('gulp');
var del          = require('del');
var less         = require('gulp-less');

gulp.task('compile', ['clean'], function () {
	return gulp.src('less/app.less')
		.pipe(less({
			paths: [ 'less/' ]
		}))
		.pipe(gulp.dest('css'));
});


gulp.task('clean', function () {
	return del(
		[
			'css'
		]
	);
});

gulp.task('default', ['compile']);