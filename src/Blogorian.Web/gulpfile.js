/// <binding ProjectOpened='watch' />
'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var print = require('gulp-print');
var angularFilesort = require('gulp-angular-filesort');
var uglify = require('gulp-uglify');
var tsc = require('gulp-typescript');
var project = require("./project.json");
var wrap = require("gulp-wrap");

var paths = {
    webroot: "./" + project.webroot + "/",
    bower: "./bower_components/"
};

gulp.task('compile-ts2js-task', function () {

    return gulp.src(paths.webroot + 'app/**/*.ts')
		.pipe(tsc({
		    out: 'output.js'
		}))
        .pipe(uglify())
		.pipe(gulp.dest(paths.webroot + 'release'));
});

gulp.task('app-ts2js-task', function () {
    var target = gulp.src(paths.webroot + 'index.html');
    var targetFolder = paths.webroot + 'release/scripts';

    var appDomainStream = gulp.src([paths.webroot + 'app/common/constants/*.js', paths.webroot + 'app/domain/*.js']);

    var appCoreStream = gulp.src([paths.webroot + 'app/core/**/*.js']);

    var appStream = gulp.src([paths.webroot + 'app/*.js',
                              paths.webroot + 'app/posts/posts.route.js',
                              paths.webroot + 'app/posts/*.js',
                              paths.webroot + 'app/common/services/*.js']);
    return target
                .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
                .pipe(inject(appCoreStream
                        .pipe(concat('core.js'))
                        .pipe(gulp.dest(targetFolder))))
                .pipe(inject(appDomainStream
                        .pipe(concat('domain.js'))
                        .pipe(gulp.dest(targetFolder))))
                .pipe(inject(appStream
                        .pipe(concat('app.js'))
                        .pipe(gulp.dest(targetFolder))));
});

gulp.task('plugins-task', function () {
    var target = gulp.src(paths.webroot + '/index.html');

    var pluginsStream = gulp.src([paths.bower + 'angular-route/angular-route.js',
                                 paths.bower + 'angular-sanitize/angular-sanitize.js',
                                 paths.bower + 'angular/angular.js',
                                 paths.bower + 'bootstrap/dist/js/bootstrap.js',
                                 paths.bower + 'jquery/dist/jquery.js']);

    return target
        .pipe(inject(
            pluginsStream.pipe(print())
                        .pipe(angularFilesort())
                        .pipe(concat('plugins.js'))
                        .pipe(gulp.dest(paths.webroot + 'release/plugins')), { name: 'plugins' }));
});

gulp.task('css-task', function () {
    var target = gulp.src(paths.webroot + '/index.html');

    var customCssStream = gulp.src([paths.bower + 'bootstrap/dist/css/bootstrap.min.css',
                                    './Styles/bootswatch.css',
                                    './Styles/site.css']);

    return target
        .pipe(inject(
            customCssStream.pipe(print())
            .pipe(concat('blogorian.css'))
            .pipe(gulp.dest(paths.webroot + 'release/css')), { name: 'styles' })
            );
});

gulp.task('watch', function () {
    gulp.watch(paths.webroot + 'app/**/*.ts', ['app-ts2js-task']);
});

gulp.task('release', ['watch', 'css-task', 'plugins-task', 'app-ts2js-task', 'compile-ts2js-task']);