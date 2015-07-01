module.exports = function(config)
{
   config.set(
   {
      port: 9001,
      reporters: 'dots',
      urlRoot: '/',
      autoWatch : true,
      basePath : '../',
      frameworks: ['jasmine'],
      browsers : ['PhantomJS'],
      plugins: 
      [
         'karma-jasmine',
         'karma-phantomjs-launcher'
      ],
      files: 
      [
         'www/js/ally.js',
         'www/js/templates.js',
         'config/bower_components/angular-mocks/angular-mocks.js',
         'dev/**/*.js'
      ]
   });
};