var gulp = require('gulp');
	concat = require('gulp-concat');
	connect = require('gulp-connect');
	uglify = require('gulp-uglify');
	sass = require('gulp-sass')
 	outputDir = 'assets/';


var cssSources = [
	'assets/css/*.css'
];

var htmlSources = [
	'index.html'
];

var jsSources = [
	'assets/js/*.js'
];

var sassSources = [
	'components/sass/style.scss' 
];

gulp.task('html', function(){
	gulp.src(htmlSources)
		.pipe(connect.reload())
});

gulp.task('css', function(){
	gulp.src(cssSources)
		.pipe(connect.reload())
});

gulp.task('sass', function(){
	gulp.src(sassSources)
		.pipe(sass({
			sass: 'components/sass',
			style: 'expanded'
		}).on('error', sass.logError))
		.pipe(gulp.dest(outputDir + 'css'))
		.pipe(connect.reload())
});

gulp.task('js', function(){
	gulp.src(jsSources)
		// .pipe(concat('script.js'))
		// .pipe(gulp.dest(outputDir + 'js'))
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']); 
	gulp.watch('components/sass/*.scss',['sass']); 
	gulp.watch(htmlSources, ['html']);
	gulp.watch(cssSources, ['css']);
});

gulp.task('connect', function(){
	connect.server({
		root: [__dirname],
		livereload: true,
	});
});

gulp.task('default', ['html', 'css', 'sass', 'js', 'watch', 'connect'])