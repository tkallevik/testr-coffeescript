describe('model', function() {

  it('to use the implementation of repository', function() {
    var Model = testr('src/model');
    var model = new Model();

    data = model.getData();

    expect(data.length).toBe(2);
    expect(data).toContain("foo");
    expect(data).toContain("bar");
  });



  it('to use a stub of repository', function() {
    repositoryStub = sinon.stub().returns({
      getData: function() {
        return ["stub"];
      }
    });

    var Model = testr('src/model', { 'src/repository': repositoryStub });
    var model = new Model();

    data = model.getData();

    expect(data.length).toBe(1);
    expect(data).toContain("stub");
  });

});
