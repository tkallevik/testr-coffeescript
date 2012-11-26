// Configure the AMD module loader
requirejs.config({
  baseUrl: 'coffee/',
  paths: {
    cs: '../lib/cs',
    'coffee-script': '../lib/coffee-script',
  }
});

require(['cs'], function() {
  require(['../lib/testr'], function() {
    require(['cs!src/model','cs!spec/model.spec'], function() {
      
    });
  });
});