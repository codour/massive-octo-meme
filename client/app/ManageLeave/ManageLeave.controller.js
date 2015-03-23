'use strict';

angular.module('leave2App')
  .controller('ManageLeaveCtrl', function ($scope, leaveData, Auth) {
    //var entree = {};
    $scope.entries = leaveData.query();
    $scope.hasChange = false;
    $scope.approve = function(entree) {

      entree.approved = true;
      leaveData.update({  id: entree._id  }, entree);

    };
  });
