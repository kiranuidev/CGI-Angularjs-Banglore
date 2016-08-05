var gulp = require("gulp");
var jshint = require("gulp-jshint");

var uglify = require('gulp-uglify');


var concat = require('gulp-concat');
var srcFiles = ["app/*/*.js", "app/*.js"];

gulp.task('minify', function () {
    return gulp.src(srcFiles)
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function () {
    return gulp.src(srcFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});




gulp.task("all", ["lint", "minify"])
