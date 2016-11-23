var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

var path = {
    build: { //building files
        css: 'website/build/css/'
    },
    watch: { //watch changes form those files
        sass: 'website/sass/*.scss'
    }
};
gulp.task('sass', function() {
    return gulp.src(path.watch.sass)
        .pipe(sass())
        .pipe(gulp.dest('website/build/css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(path.watch.sass, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass']);