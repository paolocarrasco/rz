/*global module, require */
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
    },
    blanket_mocha : {
        all : ['webapp/test/index.html'],
        options : {
            log : true,
            threshold: 80,
            reporter : 'mocha-unfunk-reporter'
        }
    }
  });

  require('mocha-unfunk-reporter').option({
      "reportPending" : true
  });

  // loading all the dependency tasks
  for (var key in grunt.file.readJSON("package.json").devDependencies) {
      if (key !== "grunt" && key.indexOf("grunt") === 0) {
          grunt.loadNpmTasks(key);
      }
  }

  grunt.registerTask('bower_install', function() {
    var bower = require('bower');
    var done = this.async();

    bower.commands
      .install()
      .on('end', function() {
        done();
      });
  });
  grunt.registerTask('coverage', ['blanket_mocha']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'bower_install', 'mocha_phantomjs']);

};
