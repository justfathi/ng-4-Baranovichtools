var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', function() {
    gulp.src('./dist/*.{html,js,json,css,txt}')
    .pipe(gzip())
    .pipe(gulp.dest('./dist'));
});

gulp.task('replace', function() {
	gulp.src('./replaceToDev/*.*')
	.pipe(gulp.dest('./dist'));
});
 
gulp.task('default', ['compress', 'replace']);