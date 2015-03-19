'use strict';

describe('Controller: ManageLeaveCtrl', function () {

  // load the controller's module
  beforeEach(module('leave2App'));

  var ManageLeaveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageLeaveCtrl = $controller('ManageLeaveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
