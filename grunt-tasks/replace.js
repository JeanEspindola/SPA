'use strict';

var config = require('../grunt-config');

/*
    It adds a timestamp after the js ans css files to avoid browser caching.
    In this example, considering that we are fully reloading the application in the development mode,
    this is not necessary.
    But it's highly recommended for production-wise applications.
*/
module.exports = function (grunt) {
    var timestamp = new Date().getTime();

    grunt.extendConfig({
        replace: {
            'bust-cache': {
                src: [
                    config.build.indexFile
                ],
                overwrite: true,
                replacements: [
                    {
                        from: 'mobiquity.min.js',
                        to: 'mobiquity.min.js?' + timestamp
                    },
                    {
                        from: 'mobiquity.min.css',
                        to: 'mobiquity.min.css?' + timestamp
                    },
                    {
                        from: 'vendor/js/vendor.min.js',
                        to: 'vendor/js/vendor.min.js?' + timestamp
                    },
                    {
                        from: 'vendor/css/vendor.min.css',
                        to: 'vendor/css/vendor.min.css?' + timestamp
                    }
                ]
            }
        }
    });
};