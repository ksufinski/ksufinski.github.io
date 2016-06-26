var gulp = require('gulp'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync');

reload = browserSync.reload;



gulp.task('default',[ 'build', 'server', 'watch']);

gulp.task('build', [
	'css:build',
	'js:build'
]);

gulp.task('server', function () {
	browserSync({
		server: {
			baseDir: './'
		},
		tunnel: false,
		host: 'localhost',
		port: 9000
	})

});

gulp.task('css:build', function () {
	gulp.src('./src/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('./build/css'))
		.pipe(reload({stream: true}))
});

gulp.task('watch', function() {
	watch(['./src/**/*.scss'], function(event,cb){
		gulp.start('css:build');
	});
	watch(['./src/**/*.js'], function(event,cb){
		gulp.start('js:build');
	});
});
gulp.task('js:build', function() {
return gulp.src('src/**/*.js')
.pipe(babel())
.pipe(gulp.dest('./build'))
.pipe(reload({stream: true}));
});


