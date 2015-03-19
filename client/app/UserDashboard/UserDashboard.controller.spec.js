'use strict';

describe('Controller: UserDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('leave2App'));

  var UserDashboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserDashboardCtrl = $controller('UserDashboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
