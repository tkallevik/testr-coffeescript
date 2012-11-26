define ['cs!src/repository'], (Repository) ->

  class Model
    getData: ->
      repository = new Repository()
      return repository.getData()