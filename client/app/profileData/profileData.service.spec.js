'use strict';

describe('Service: profileData', function () {

  // load the service's module
  beforeEach(module('leave2App'));

  // instantiate service
  var profileData;
  beforeEach(inject(function (_profileData_) {
    profileData = _profileData_;
  }));

  it('should do something', function () {
    expect(!!profileData).toBe(true);
  });

});
