var express = require('express');

var serveStatic = require('serve-static');
var proxy = require('express-http-proxy');

module.exports = function() {
    var app = express();

    app.use('/', serveStatic(__dirname + '/../build/static/mobiquity', {'index': ['index.html', 'index.htm']}));

    // If no route is matched by now, it must be a 404
    app.use(function(req, res, next) {
        res.status(404).end();
    });

    return app;
};