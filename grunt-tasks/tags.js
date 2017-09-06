'use strict';

var config = require('../grunt-config');

module.exports = function(grunt) {

    grunt.config('tags', {

        appScripts: {
            options: {
                scriptTemplate: '<script src="/{{ path }}"></script>',
                openTag: '<!-- @@APP-SCRIPTS@@ -->',
                closeTag: '<!-- @@APP-SCRIPTS@@ -->'
            },
            src: [
                config.build.distScriptsFile
            ],
            dest: config.build.indexFile
        },

        appStyles: {
            options: {
                linkTemplate: '<link rel="stylesheet" href="/{{ path }}"/>',
                openTag: '<!-- @@APP-STYLES@@ -->',
                closeTag: '<!-- @@APP-STYLES@@ -->'
            },
            src: [
                config.build.distStylesFile
            ],
            dest: config.build.indexFile
        },

        vendorScripts: {
            options: {
                scriptTemplate: '<script src="/{{ path }}"></script>',
                openTag: '<!-- @@VENDOR-SCRIPTS@@ -->',
                closeTag: '<!-- @@VENDOR-SCRIPTS@@ -->'
            },
            src: [
                config.build.vendorScriptsFile
            ],
            dest: config.build.indexFile
        },

        vendorStyles: {
            options: {
                linkTemplate: '<link rel="stylesheet" href="/{{ path }}"/>',
                openTag: '<!-- @@VENDOR-STYLES@@ -->',
                closeTag: '<!-- @@VENDOR-STYLES@@ -->'
            },
            src: [
                config.build.vendorStylesFile
            ],
            dest: config.build.indexFile
        }
    });

    /*
        This task adds the script and style tags for all 4 generated files inside the index.html (build folder).
        Inside the index.html file look for the commented tags.
        Compare the index.html file in the root folder with the one inside the generated build.
    */
    grunt.registerTask('tags:all', '', function(env) {

        grunt.task.run([
            'tags:appScripts',
            'tags:appStyles',
            'tags:vendorScripts',
            'tags:vendorStyles'
        ]);

    });

};