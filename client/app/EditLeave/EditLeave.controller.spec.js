'use strict';

describe('Controller: EditLeaveCtrl', function () {

  // load the controller's module
  beforeEach(module('leave2App'));

  var EditLeaveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditLeaveCtrl = $controller('EditLeaveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
