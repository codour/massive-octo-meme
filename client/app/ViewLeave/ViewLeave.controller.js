'use strict';

angular.module('leave2App')
  .controller('ViewLeaveCtrl', function ($scope, leaveData, Auth) {

    $scope.entries = leaveData.query();
    $scope.currentUser = Auth.getCurrentUser().name;

    $scope.init = function () {
      //$scope.entries = leaveData.query();

    };
  });
