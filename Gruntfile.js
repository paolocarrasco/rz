/* jshint camelcase: false */
/* global module */
module.exports = function(grunt) {

  'use strict';
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc',
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
        tasks: ['jshint:app_files','blanket_mocha']
      },
      test_files: {
        files: '<%= jshint.test_files.src %>',
        tasks: ['jshint:test_files','blanket_mocha']
      },
      test_config: {
        files: 'webapp/test/index.html',
        tasks: 'blanket_mocha'
      }
    },
    blanket_mocha : {
      all : ['webapp/test/index.html'],
      options : {
        log : true,
        threshold: 80,
        reporter : 'mocha-unfunk-reporter',
        globalThreshold : 80,
        moduleThreshold : 80,
        modulePattern : './(.*?)/'
      }
    }
  });

  (function loadGruntTasksFrom(devDependencies) {
    for (var key in devDependencies) {
      if (key.indexOf('grunt') === 0 && key !== 'grunt') {
        grunt.loadNpmTasks(key);
      }
    }
  }(grunt.file.readJSON('package.json').devDependencies));

  grunt.registerTask('coverage', ['blanket_mocha']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'blanket_mocha']);

};
