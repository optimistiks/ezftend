describe('SearchCtrl', function () {

  beforeEach(module('index'));

  var scope, ctrl;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('SearchCtrl', {$scope: scope});
  }));

  it('should ...', inject(function () {

    expect(1).toEqual(1);

  }));

});
