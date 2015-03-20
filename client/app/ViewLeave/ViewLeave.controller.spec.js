'use strict';

describe('Controller: ViewLeaveCtrl', function () {

  // load the controller's module
  beforeEach(module('leave2App'));

  var ViewLeaveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewLeaveCtrl = $controller('ViewLeaveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
