'use strict';

var config = require('../grunt-config');

//Compile every less file into a css one.
//Used to preprocessor the css files.
module.exports = function(grunt) {
    grunt.config('less', {
        process: {
            options: {
                paths: [
                    config.app.wildcards.less
                ]
            },
            files: [
                {
                    expand: true,
                    src: config.app.wildcards.less,
                    ext: '.css',
                    dest: config.build.mobiquityDir
                }
            ]
        }
    })
};