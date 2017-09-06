'use strict';

/*
* Provides all constant values for grunt-tasks
* Imported in all grunt tasks files.
*
* */

module.exports = {
    build: {
        rootDir: 'build',
        mobiquityDir: 'build/static/mobiquity',
        indexFile : 'build/static/mobiquity/index.html',
        wildcards: {
            styles: 'build/static/mobiquity/app/**/*.css',
            styleFolder: 'build/static/mobiquity/app/**/css'
        },
        distScriptsFile: 'build/static/mobiquity/mobiquity.min.js',
        distStylesFile: 'build/static/mobiquity/mobiquity.min.css',
        distVendorDir: 'build/static/mobiquity/vendor',
        vendorScriptsFile: 'build/static/mobiquity/vendor/js/vendor.min.js',
        vendorStylesFile: 'build/static/mobiquity/vendor/css/vendor.min.css'
    },
    app: {
        wildcards: {
            less: 'app/**/*.less',
            html: 'app/**/*.html',

            scripts: [
                'app/app.js',
                'app/app-controller.js',
                'app/**/*-module.js',
                'app/**/*-config.js',
                'app/**/*.js'
            ],

            vendorJsSrc: [
                'vendor/jquery/dist/jquery.js',
                'vendor/jqueryui/jquery-ui.js',
                'vendor/jquery.animate-enhanced/jquery.animate-enhanced.min.js',
                'vendor/jquery.easing/js/jquery.easing.js',
                'vendor/bootstrap/dist/js/bootstrap.js',
                'vendor/angular/angular.js',
                'vendor/angular-resource/angular-resource.js',
                'vendor/angular-ui-router/release/angular-ui-router.js',
                'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
                'vendor/angular-cookie/angular-cookie.js',
                'vendor/angular-cookies/angular-cookies.js',
                'vendor/angular-sanitize/angular-sanitize.min.js',
                'vendor/angular-aria/angular-aria.js',
                'vendor/angular-animate/angular-animate.min.js',
                'vendor/angular-material/angular-material.js',
                'vendor/angular-load/angular-load.js',
                'vendor/d3/d3.js',
                'vendor/modernizr/modernizr.js',
                'vendor/log4javascript/log4javascript.js',
                'vendor/lodash/lodash.js',
                'vendor/bootstrap-colorpickersliders/dist/tinycolor.js',
                'vendor/bootstrap-colorpickersliders/dist/bootstrap.colorpickersliders.js',
                'vendor/datatables/media/js/jquery.dataTables.js',
                'vendor/angular-datatables/dist/angular-datatables.js',
                'vendor/phoneformat/PhoneFormat.js',
                'vendor/intl-tel-input/build/js/intlTelInput.min.js',
                'vendor/intl-tel-input/lib/libphonenumber/build/utils.js',
                'vendor/angular-ui-slider/src/slider.js',
                'vendor/moment/min/moment-with-locales.min.js',
                'vendor/detectizr/dist/detectizr.min.js',
                'vendor/angular-ui-grid/ui-grid.min.js',
                'vendor/moment/min/moment-with-locales.min.js',
                'vendor/angular-slideout-panel/release/js/angular-slideout-panel.min.js'
            ],

            vendorStyleSrc: [
                'vendor/bootstrap/dist/css/bootstrap.min.css',
                'vendor/font-awesome/css/font-awesome.css',
                'vendor/angular-slideout-panel/release/css/angular-slideout-panel.min.css'
            ],

            vendorFonts: [
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
                'vendor/font-awesome/fonts/FontAwesome.otf',
                'vendor/font-awesome/fonts/fontawesome-webfont.eot',
                'vendor/font-awesome/fonts/fontawesome-webfont.svg',
                'vendor/font-awesome/fonts/fontawesome-webfont.ttf',
                'vendor/font-awesome/fonts/fontawesome-webfont.woff',
                'vendor/font-awesome/fonts/fontawesome-webfont.woff2'
            ],

            vendorUiGridFonts: []
        }
    }
};