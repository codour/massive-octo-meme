'use strict';

describe('Service: adminLeavedata', function () {

  // load the service's module
  beforeEach(module('leave2App'));

  // instantiate service
  var adminLeavedata;
  beforeEach(inject(function (_adminLeavedata_) {
    adminLeavedata = _adminLeavedata_;
  }));

  it('should do something', function () {
    expect(!!adminLeavedata).toBe(true);
  });

});
