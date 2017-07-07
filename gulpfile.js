var gulp = require('gulp'),
		imagemin = require('gulp-imagemin');


gulp.task('build-img', function(){

	gulp.src('assets/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img'))

});



