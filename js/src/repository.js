define(['src/database'], function(Datasource) {

  repository = function() {
    return {
      getData: function() {
        var datasource = new Datasource();
        return datasource.query();
      }
    };
  };

  return repository;
});