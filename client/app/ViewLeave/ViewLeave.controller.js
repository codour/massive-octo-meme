'use strict';

angular.module('leave2App')
  .controller('ViewLeaveCtrl', function ($scope, leaveData, Auth) {
    $scope.message = 'Hello';

    $scope.entries = leaveData.query();

    $scope.init = function () {
      //$scope.entries = leaveData.query();

    };
  });
