
var gulp = require( 'gulp' ),
	browserify = require( 'gulp-browserify' ),
	uglify = require( 'gulp-uglify' ),
	rename = require( 'gulp-rename' ),
	sass = require( 'gulp-sass' ),
    autoprefixer = require( 'gulp-autoprefixer' );

gulp.task( 'scripts', function() {

	gulp.src( './js/app.js', { read: false } )
		.pipe( browserify() )
        .on( 'error', function( err ) {
            console.log( err.message );
        } )
		//.pipe( uglify() )
		.pipe( rename( 'main.js' ) )
		.pipe( gulp.dest( './scripts/' ) )
} );

gulp.task( 'styles', function() {

	gulp.src( './css/main.scss' )
		.pipe( sass() )
        .on( 'error', function( err ) {
            console.log( err.message );
        } )
		.pipe( autoprefixer( {
            browsers: [ 'last 2 version' ],
            cascade: true
        } ) )
		.pipe( gulp.dest( './css' ) )
} );

gulp.task( 'default', function() {

	gulp.watch( './js/**/*.js', [ 'scripts' ] );
	gulp.watch( './css/**/*.scss', [ 'styles' ] );
} );
