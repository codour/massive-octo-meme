'use strict';

angular.module('leave2App')
  .controller('CancelLeaveCtrl', function ($scope, leaveData, Auth) {

    $scope.entries = leaveData.query();
    $scope.currentUser = Auth.getCurrentUser().name;

    $scope.delete = function(entree) {
      leaveData.remove({ id: entree._id });
      angular.forEach($scope.entries, function(u, i) {
        if (u === entree) {
          $scope.entries.splice(i, 1);
        }
      });
    };
  });
