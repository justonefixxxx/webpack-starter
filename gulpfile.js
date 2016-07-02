const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
    return gulp.src('app/**/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('build/**/'));
});

gulp.task('default', ['minify-css']);
