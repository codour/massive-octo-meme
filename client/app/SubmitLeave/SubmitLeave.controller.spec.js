'use strict';

describe('Controller: SubmitLeaveCtrl', function () {

  // load the controller's module
  beforeEach(module('leave2App'));

  var SubmitLeaveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmitLeaveCtrl = $controller('SubmitLeaveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
