const gulp = require('gulp');

const command = require('../../gulpfile');


exports.default = gulp.series(command.default)