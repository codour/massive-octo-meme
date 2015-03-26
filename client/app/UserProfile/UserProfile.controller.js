'use strict';

angular.module('leave2App')
  .controller('UserProfileCtrl', function ($scope, Auth, profileData) {

    //$scope.entries = {};

    $scope.entries = profileData.query();
    //$scope.testEntries = [];
    $scope.testEntries = typeof $scope.entries;

    /* for(var i=0; i<$scope.entries.length; ++i){
      console.log($scope.entries[i].loginID);
      $scope.testEntries.push($scope.entries[i].loginID);
    }*/

    $scope.submit = function(entry) {
      profileData.update({  id: entry._id  }, entry);

    };
  });
