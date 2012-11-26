define([], function() {

  database = function() {
    return {
      query: function() {
        return ["foo", "bar"];
      }
    };
  };

  return database;
});