define ['cs!src/database'], (Datasource) ->

  class Repository
    getData: ->
      datasource = new Datasource()
      return datasource.query()