const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const sync = require('gulp-sync')(gulp).sync

const sassOption = {
	outputStyle: 'expanded',
	includePaths: 'node_modules',
}

gulp.task(
	'default',
	gulp.series(
		() => build('light'),
		() => build('dark'),
	),
)

function build(themeName) {
	return gulp
		.src(`./${themeName}/main.scss`)
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
		.pipe(
			rename({
				basename: `${themeName}`,
				suffix: '',
				extname: '.css',
			}),
		)
		.pipe(gulp.dest('./../../dist/packages/nomimono-theme/'))
}
