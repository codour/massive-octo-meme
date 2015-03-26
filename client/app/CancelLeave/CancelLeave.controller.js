'use strict';

angular.module('leave2App')
  .controller('CancelLeaveCtrl', function ($scope, leaveData, Auth) {
    $scope.message = 'Hello';
    $scope.test = moment();
    $scope.entries = leaveData.query();

    $scope.delete = function(entree) {
      leaveData.remove({ id: entree._id });
      angular.forEach($scope.entries, function(u, i) {
        if (u === entree) {
          $scope.entries.splice(i, 1);
        }
      });
    };
  });
