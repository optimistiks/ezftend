describe('AddCtrl', function () {

  beforeEach(module('index'));

  var scope, ctrl;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('AddCtrl', {$scope: scope});
  }));

  it('should ...', inject(function () {

    expect(1).toEqual(1);

  }));

});
