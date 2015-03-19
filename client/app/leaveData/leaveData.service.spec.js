'use strict';

describe('Service: leaveData', function () {

  // load the service's module
  beforeEach(module('leave2App'));

  // instantiate service
  var leaveData;
  beforeEach(inject(function (_leaveData_) {
    leaveData = _leaveData_;
  }));

  it('should do something', function () {
    expect(!!leaveData).toBe(true);
  });

});
