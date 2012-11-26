describe 'model', ->

  it 'to use the implementation of repository', ->
    Model = testr('src/model')
    model = new Model()

    data = model.getData()

    expect(data.length).toBe(2)
    expect(data).toContain("foo")
    expect(data).toContain("bar")

  it 'to use a stub of repository', ->
    repositoryStub = sinon.stub().returns({
      getData: ->
        return ["stub"]
    })

    Model = testr('src/model', { 'src/repository': repositoryStub })
    model = new Model()

    data = model.getData()

    expect(data.length).toBe(1)
    expect(data).toContain("stub")
