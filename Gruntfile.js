module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('grunt-tasks');

    /*
        Calls the development task, to build and compile the application.
        Then calls the express task to raise a localhost port for the web application.
        After, calls the watcher. If any change is made, the entire application will rebuild and be
        ready for the developer. The only action needed is to reload the browser.
    */
    grunt.registerTask('server', 'Opens an express server for development', function() {

        grunt.task.run([
            'development',
            'express:dev',
            'watch:dev'
        ]);
    });

    /*
        Execute a series of tasks to build/compile the application.
        The tasks are inside the grunt-tasks folder
        Each one have comments explaining
        After the development task completes, the application will be ready to execute inside the /build folder
    */
    grunt.registerTask('development', 'Prepare the project for a development', function(){
       grunt.task.run([
           'clean:build',
           'less',
           'copy:all',
           'concat:all',
           'cssmin',
           'clean:css',
           'tags:all'
       ])
    });
};