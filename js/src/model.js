define(['src/repository'], function(Repository) {

  model = function() {
    return {
      getData: function() {
        var repository = new Repository();
        return repository.getData();
      }
    };
  };

  return model;
});