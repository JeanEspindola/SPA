/**
 * Main module for the application
 *
 **/
(function() {
    //use strict avoids global variables, used in all files.
    'use strict';

    angular
        .module('mobiquity', [
            'ui.router',
            'mobiquity.core',
            'mobiquity.champions'
        ]);
})();