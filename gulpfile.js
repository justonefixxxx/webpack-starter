const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

let concatOrder  = ['app/**/vendor/*.css', 'app/**/layout/*.css', 'app/**/user/*.css' ]

gulp.task('css', ()=> {
    return gulp.src(concatOrder)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/styles'));
});


gulp.task('js', ()=> {
    return gulp.src('app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('imagemin', () => {
    return gulp.src('app/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
});

gulp.task('serve', ['css', 'js', 'imagemin'], ()=> {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['app/**/*.*', 'index.html'], ['css', 'js', 'imagemin', browserSync.reload]);
});


gulp.task('default', ['serve']);
