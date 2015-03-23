'use strict';

angular.module('leave2App')
  .controller('RosterCtrl', function ($scope, leaveData, Auth) {
    $scope.entries = leaveData.query();

    $scope.isApproved = function(entry){
      return entry.approved;
    };
  });
