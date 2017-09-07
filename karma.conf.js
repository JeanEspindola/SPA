'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'vendor/jquery/dist/jquery.js',
            'vendor/bootstrap/dist/js/bootstrap.js',
            'vendor/angular/angular.js',
            'vendor/angular-mocks/angular-mocks.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/sinonjs/sinon.js',
            'node_modules/ng-describe/dist/ng-describe.js',

            'app/app.js',
            'app/**/*-module.js',
            'app/**/*-config.js',
            'app/**/*.js',
            'app/app-controller.js',
            //'test/**/*.json',

            // html

            'index.html',
            'app/**/*.html'

            //'test/mock/*.js'
        ],
        port: 9876,

        preprocessors: {
            'test/**/*.json': ['ng-json2js'],
            'app/**/*.html': ['ng-html2js'],
            'app/**/*.js': ['coverage']
        },
        ngJson2JsPreprocessor: {
            stripPrefix: 'test/mock/',
            prependPrefix: 'mock/'
        },
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        browserNoActivityTimeout: 50000
    });
};