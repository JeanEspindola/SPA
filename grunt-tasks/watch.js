'use strict';

/*
*   Listen to changes in all development files and call the development task again to recompile the project.
*/
module.exports = function (grunt) {
    grunt.config('watch', {
        options: {
            livereload: true
        },
        dev: {
            files: ['index.html', 'app/**/*.html', 'app/**/*.less', 'app/**/*.js'],
            tasks: ['development']
        }
    });
};