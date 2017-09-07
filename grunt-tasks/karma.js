
'use strict';

module.exports = function(grunt) {
    grunt.config('karma', {
        main: {
            configFile: 'karma.conf.js',
            reporters: ['progress', 'junit', 'coverage'],
            junitReporter: {
                outputDir: 'results',
                outputFile: 'TEST-units.xml',
                suite: ''
            },
            coverageReporter: {
                type: 'lcov',
                dir: 'results/',
                subdir: '.'
            },
            autoWatch: false,
            singleRun: true
        },

        unit: {
            configFile: 'karma.conf.js',
            reporters: ['progress'],
            singleRun: false,
            autoWatch: true
        }
    });
};