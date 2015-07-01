module.exports = function(grunt)
{
   grunt.loadNpmTasks('grunt-karma');
   grunt.loadNpmTasks('grunt-html2js');
   grunt.loadNpmTasks('grunt-ng-constant');
   grunt.loadNpmTasks('grunt-contrib-jade');
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-connect');



   grunt.registerTask('dev', ['jshint', 'ngconstant:main', 'copy', 'jade:dev', 'html2js', 'concat:main', 'less:main', 'cssmin:main',  'karma:unit', 'karma:continuous', 'connect', 'watch']);
   


   grunt.initConfig(
   {
      pkg: grunt.file.readJSON('package.json'),





      // grunt-ng-constant
      // https://www.npmjs.org/package/grunt-ng-constant
      // Plugin for dynamic generation of angular constant modules.
      ngconstant: 
      {
         options: 
         {
            name: 'app.service.constants',
            dest: '../dev/app/constants/constants.js'
         },
         main: 
         {
            constants: 
            {
               API: 'json/'
            }
         }
      },





      // grunt-contrib-jade
      // https://github.com/gruntjs/grunt-contrib-jade
      // Compile Jade templates.
      jade: 
      {
         dev: 
         {
            options: 
            {
               pretty:true
            },
            files: 
            {
               "../www/index.html": "../dev/app/_root/index.jade"
            }
         }
      },

   


      // grunt-karma
      // https://github.com/karma-runner/grunt-karma
      // Grunt plugin for Karma.
      karma:
      {
         options: 
         {
            configFile: 'karma.config.js'
         },
         unit:
         {
            background: true
         },
         continuous: 
         {
            singleRun: true
         }
      },





      // grunt-contrib-watch
      // https://github.com/gruntjs/grunt-contrib-watch
      // Autocompiles the application when a file is saved
      watch:
      {
         options: 
         {
            livereload: true
         },
         html:
         {
            files: 
            [
               '../dev/**/*.jade'
            ],
            tasks: ['jade:dev', 'html2js', 'concat:main']
         },
         styles: 
         {
            files: ['../dev/**/*.less'],
            tasks: ['less:main', 'cssmin:main'],
            options: 
            {
               nospawn: true
            }
         },
         scripts:
         {
            files: ['../dev/**/*.js'],
            tasks: ['jshint', 'karma:unit', 'karma:continuous', 'concat:main']
         }
      },





      // grunt-contrib-jshint
      // https://github.com/gruntjs/grunt-contrib-jshint
      // Validate files with JSHint.
      jshint: 
      {
         files: ['../dev/**/*.js']
      },





      // grunt-html2js
      // https://github.com/karlgoldstein/grunt-html2js
      // Grunt plugin for converting AngularJS templates to JavaScript
      html2js: 
      {
         options: 
         {
            rename: function (moduleName) 
            {
               return moduleName.replace('.jade', '.tpl.html');
            }
         },
         main: 
         {
            src: ['../dev/**/*.jade'],
            dest: '../www/js/templates.js'
         },
      },





      // grunt-contrib-concat
      // https://github.com/gruntjs/grunt-contrib-concat
      // Concatenate files.
      concat:
      {
         main:
         {
            nonull: true,
            dest: '../www/js/ally.js',
            src: 
            [
               'bower_components/jquery/dist/jquery.js',
               'bower_components/angular/angular.js',
               'bower_components/angular-bootstrap/ui-bootstrap.js',
               'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
               'bower_components/angular-ui-router/release/angular-ui-router.js',
               'bower_components/bootstrap/dist/js/bootstrap.js',
               'bower_components/lodash/lodash.js',
               '../www/js/templates.js',
               '../dev/**/*.js',
               '!../dev/**/*.spec.js'
            ]
         }
      },





      // grunt-contrib-less
      // https://github.com/gruntjs/grunt-contrib-less
      // Compile LESS files to CSS.
      less: 
      {
         main: 
         {
            options: 
            {
               compress: false,
               yuicompress: true,
               optimization: 2
            },
            files: 
            {
               "../www/css/app.css": "../dev/**/*.less"
            }
         }
      },





      // grunt-contrib-cssmin
      // https://github.com/gruntjs/grunt-contrib-cssmin
      // Compress CSS files.
      cssmin: 
      {
         main: 
         {
            files: 
            {
               '../www/css/ally.css': 
               [
                  'bower_components/bootstrap/dist/css/bootstrap.min.css',
                  'bower_components/fontawesome/css/font-awesome.css',
                  '../www/css/app.css'
               ]
            }
         }
      },





      // grunt-contrib-connect
      // https://github.com/gruntjs/grunt-contrib-connect
      // Starts a static web server.
      connect:
      {
         server:
         {
            options:
            {
               base:'../www',
               port: 3333
            }
         }
      },





      // grunt-contrib-copy
      // https://github.com/gruntjs/grunt-contrib-copy
      // Copy fonts and images into proper directories
      copy:
      {
         
         main: 
         {
            files:
            [
               {
                  nonull: true, expand:true, cwd: 'bower_components/bootstrap/fonts/', src: ['**'], dest: '../www/fonts/'
               },
               {
                  nonull: true, expand:true, cwd: 'bower_components/fontawesome/fonts/', src: ['**'], dest: '../www/fonts/'
               },
               {
                  nonull: true, expand:true, cwd: '../dev/common/images/', src: ['**'], dest: '../www/images/'
               },
               {
                  nonull: true, expand:true, cwd: '../dev/common/json/', src: ['**'], dest: '../www/json/'
               }
            ]
         }
      },





      // grunt-contrib-uglify
      // https://github.com/gruntjs/grunt-contrib-uglify
      // Minify files with UglifyJS
      uglify: 
      {
         main: 
         {
            files: 
            {
               '../www/js/ally.js': ['../www/js/ally.js']
            }
         }
      }
   });
};