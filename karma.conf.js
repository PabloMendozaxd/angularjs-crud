//jshint strict: false
module.exports = function(config) {
    config.set({
  
      basePath: './app',
  
      files: [
        '**/*.spec.js'
      ],
  
      autoWatch: true,
  
      frameworks: ['jasmine'],
  
      browsers: ['PhantomJS'],
  
      plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine'
      ]
  
    });
  };
  