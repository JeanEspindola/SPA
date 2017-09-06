'use strict';

var config = require('../grunt-config');


module.exports = function (grunt) {
    grunt.config('copy', {

        common: {
            files: [
                {
                    expand: true,
                    src: [
                        config.app.wildcards.html,
                        'index.html'
                    ],
                    dest: config.build.mobiquityDir
                }
            ]
        },

        fonts : {
            files : [

                {
                    expand: true,
                    flatten: true,
                    src: config.app.wildcards.vendorFonts,
                    dest: config.build.distVendorDir + '/fonts/'
                }
            ]
        }
    });

    //Copy all html and fonts files to the build folder
    grunt.registerTask('copy:all', '', function(env) {
        grunt.task.run([
            'copy:common',
            'copy:fonts'
        ]);
    });
};