'use strict';

describe('Controller: CancelLeaveCtrl', function () {

  // load the controller's module
  beforeEach(module('leave2App'));

  var CancelLeaveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CancelLeaveCtrl = $controller('CancelLeaveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
