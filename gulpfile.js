const gulp = require('gulp')
const mqpacker = require('css-mqpacker')
const scss = require('postcss-scss')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const postcss = require('gulp-postcss')
const plumber = require('gulp-plumber')
const watch = require('gulp-watch')

const cssMain = 'src/css/main.css'

gulp.task('css', () => {
  var processors = [
    atImport,
    cssnext({ browsers: ['last 2 versions'] }),
    nested,
    mqpacker
  ]
  return gulp.src(cssMain)
    .pipe(watch(cssMain))
    .pipe(plumber())
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('default', ['css'])
