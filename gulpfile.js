const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('minify-css', ()=> {
    return gulp.src('app/**/*.css')
        .pipe(concat('bundle.css'))
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('build/styles'));
});


gulp.task('js-handling', ()=> {
    return gulp.src('app/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('serve', ['minify-css', 'js-handling'], ()=> {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch("app/**/*.*", ['minify-css', 'js-handling', browserSync.reload]);
});


gulp.task('default', ['serve']);
