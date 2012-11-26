// Configure the AMD module loader
requirejs.config({
  baseUrl: 'js/'
});

require(['../lib/testr'], function() {
  require(['src/model', 'spec/model.spec'], function() {
      
  });
});