'use strict';

var config = require('../grunt-config');

//Minifies the css generated files
module.exports = function(grunt) {
    grunt.config('cssmin', {
        app: {
            files: [
                {
                    src: config.build.distStylesFile,
                    dest: config.build.distStylesFile
                }
            ]
        },

        vendor: {
            files: [
                {
                    src: config.build.vendorStylesFile,
                    dest: config.build.vendorStylesFile
                }
            ]
        }

    });
};