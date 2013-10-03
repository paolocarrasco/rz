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
      lib_test: {
        src: ['webapp/js/app/**/*.js', 'webapp/test/specs/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test','mocha_phantomjs']
      }
    },
    mocha_phantomjs: {
        options: {
          'reporter': 'spec'
        },
        all: ['webapp/test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  
  // Default task.
  grunt.registerTask('default', ['mocha_phantomjs']);

};
