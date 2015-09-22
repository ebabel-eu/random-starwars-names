module.exports = function(grunt) {

  var config = grunt.file.readJSON('config.json');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    jshint: {
      options: config.jshint.options,
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/**/*.js']
      }
    },
    jsdoc: {
      src : {
        src: ['src/*.js', '*.md'],
        options: {
          destination: 'doc'
        }
      }
    },
    coveralls: {
        options: {
            debug: true,
            coverageDir: 'coverage',
            dryRun: true,
            force: true,
            recursive: true
        }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-karma-coveralls');

  // Default task.
  grunt.registerTask('default', [
    'jshint',
    'jsdoc',
    'coveralls'
  ]);

};
