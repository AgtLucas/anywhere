const gulp = require('gulp')
const mqpacker = require('css-mqpacker')
const scss = require('postcss-scss')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const postcss = require('gulp-postcss')

gulp.task('css', () => {
  var processors = [
    atImport,
    cssnext({ browsers: ['last 2 versions'] }),
    nested,
    mqpacker
  ]
  return gulp.src('src/css/main.css')
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('default', ['css'])
