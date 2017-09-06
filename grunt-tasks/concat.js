'use strict';

var config = require('../grunt-config');

module.exports = function(grunt) {
    grunt.config('concat', {

        appScripts: {
            src: config.app.wildcards.scripts,
            dest: config.build.distScriptsFile
        },

        appStyles: {
            src: config.build.wildcards.styles,
            dest: config.build.distStylesFile
        },

        vendorScripts: {
            src: config.app.wildcards.vendorJsSrc,
            dest: config.build.vendorScriptsFile
        },

        vendorStyles: {
            src: config.app.wildcards.vendorStyleSrc,
            dest: config.build.vendorStylesFile
        }
    });

    /*
        Concatenates all javascript and styles in a single one.
        It generates 4 files. 2 javascript (application and vendor) and 2 css (application and vendor).
    */
    grunt.registerTask('concat:all', '', function(env) {
        grunt.task.run([
            'concat:appScripts',
            'concat:appStyles',
            'concat:vendorScripts',
            'concat:vendorStyles'
        ]);
    });
};