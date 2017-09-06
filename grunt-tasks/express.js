'use strict';

var config = require('../grunt-config');

//Raises the localhost port for the index.html file
module.exports = function (grunt) {

    grunt.config('express', {

        dev: {
            options: {
                script: 'servers/server.js'
            }
        }
    });
};