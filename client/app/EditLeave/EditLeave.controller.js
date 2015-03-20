'use strict';

angular.module('leave2App')
  .controller('EditLeaveCtrl', function ($scope, leaveData, Auth) {

    $scope.entries = leaveData.query();

    $scope.submit = function(entree) {

    };
  });
