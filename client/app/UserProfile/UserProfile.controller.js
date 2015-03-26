'use strict';

angular.module('leave2App')
  .controller('UserProfileCtrl', function ($scope, Auth, profileData) {

    //$scope.entries = {};

    $scope.entries = profileData.query();

    $scope.submit = function(entry) {
      profileData.update({  id: entry._id  }, entry);

    };
  });
