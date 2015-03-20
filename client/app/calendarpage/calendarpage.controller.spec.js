'use strict';

describe('Controller: CalendarpageCtrl', function () {

  // load the controller's module
  beforeEach(module('leave2App'));

  var CalendarpageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalendarpageCtrl = $controller('CalendarpageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
