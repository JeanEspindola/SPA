'use strict';

var config = require('../grunt-config');

module.exports = function (grunt) {
    grunt.config('clean', {
        //Cleans up the entire build folder
        build: [
            config.build.rootDir
        ],
        //Cleans all css files after the minification of them.
        css: [
            config.build.wildcards.styleFolder
        ]

    });
};