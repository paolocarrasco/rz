/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        expr: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        predef: [
          'it',
          'describe',
          'should',
          'beforeEach',
          'afterEach',
          'before',
          'after'
        ]
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      app_files: {
        src: 'webapp/js/app/**/*.js'
      },
      test_files: {
        src: 'webapp/test/specs/**/*.js'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: 'jshint:gruntfile'
      },
      app_files: {
        files: ['<%= jshint.app_files.src %>', 'webapp/js/main.js'],
        tasks: ['jshint:app_files','mocha_phantomjs']
      },
      test_files: {
        files: '<%= jshint.test_files.src %>',
        tasks: ['jshint:test_files','mocha_phantomjs']
      },
      test_config: {
        files: 'webapp/test/index.html',
        tasks: 'mocha_phantomjs'
      }
    },
    mocha_phantomjs: {
        options: {
          'reporter': 'spec'
        },
        all: 'webapp/test/**/*.html'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

  grunt.registerTask('bower_install', function() {
    /* global require */
    var bower = require('bower');
    var done = this.async();

    bower.commands
      .install()
      .on('end', function() {
        done();
      });
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'bower_install', 'mocha_phantomjs']);

};
