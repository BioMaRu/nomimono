const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const sync = require('gulp-sync')(gulp).sync

const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules',
}

gulp.task('default', gulp.series(reset, atomic, layout, component, utility))

function atomic() {
	return gulp
		.src('./scss/atomic/all.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
		.pipe(
			rename({
				basename: 'atomic',
				suffix: '',
				extname: '.css',
			}),
		)
		.pipe(gulp.dest('../../dist/packages/nomimono-css/'))
}

function layout() {
	return gulp
		.src('./scss/layout/all.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
		.pipe(
			rename({
				basename: 'layout',
				suffix: '',
				extname: '.css',
			}),
		)
		.pipe(gulp.dest('../../dist/packages/nomimono-css/'))
}

function reset() {
	return gulp
		.src('./scss/reset.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
		.pipe(
			rename({
				basename: 'reset',
				suffix: '',
				extname: '.css',
			}),
		)
		.pipe(gulp.dest('../../dist/packages/nomimono-css/'))
}

function component() {
	return gulp
		.src('./scss/component/all.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
		.pipe(
			rename({
				basename: 'component',
				suffix: '',
				extname: '.css',
			}),
		)
		.pipe(gulp.dest('../../dist/packages/nomimono-css/'))
}

function utility() {
	return gulp
		.src('./scss/utility/all.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
		.pipe(
			rename({
				basename: 'utility',
				suffix: '',
				extname: '.css',
			}),
		)
		.pipe(gulp.dest('../../dist/packages/nomimono-css/'))
}
