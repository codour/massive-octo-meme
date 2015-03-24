'use strict';

angular.module('leave2App')
  .controller('UserProfileCtrl', function ($scope, Auth, profileData) {

    $scope.entries = {};

    $scope.entries = profileData.query();

    $scope.submit = function() {
      /*$scope.entry.push(Auth.getCurrentUser());
      $scope.entry["dateFrom"] = moment($scope.entry["dateFrom"]).toDate();
      $scope.entry["loginID"] = Auth.getCurrentUser().name;
      $scope.entry["approved"] = false;
      leaveData.save($scope.entry);*/

      console.log ("Submit clicked");
    };
  });
