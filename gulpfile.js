var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');


gulp.task( 'webserver:browser-sync', () => {
	browserSync.init({
		port: 8081,
		proxy: 'http://e92.936.myftpupload.com',
		serveStatic: [{
			route: '/wp-content/themes/twentyseventeen',
			dir: './dist'
		}],
		reloadDebounce: 100
	})
});

gulp.task( 'scss', () => {
	return gulp.src('./src/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist'))
});

gulp.task( 'watch', () => {
	gulp.watch('./src/**/*.scss', ['scss']);	
});

gulp.task( 'webserver', [ 'watch', 'webserver:browser-sync' ] );