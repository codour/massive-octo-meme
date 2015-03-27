'use strict';

angular.module('leave2App')
  .controller('EditLeaveCtrl', function ($scope, $filter ,leaveData, Auth) {
    $scope.entries = leaveData.query();
    $scope.currentUser = Auth.getCurrentUser().name;
    //console.log('My Filter: ', $filter('filter')($scope.entries, {loginID:Auth.getCurrentUser().name}));
    //$scope.getCurrentUser = Auth.getCurrentUser().name;
    /*$scope.submit = function() {
      angular.forEach($scope.entries, function(u, i) {
         $scope.entries.dateFrom = dateFrom;
         $scope.entries.dateTo = dateTo;
         $scope.entries.timeFrom = timeFrom;
         $scope.entries.timeTo = timeTo;
        leaveData.update({  id: $scope._id  }, $scope.entries);
        console.log($scope.entries.dateFrom + ", " + $scope.entries.dateTo + ", " + $scope.entries.timeFrom + ", " + $scope.entries.timeTo);
        //leaveData.update({  id: i._id  }, i);

      });

      //leaveData.save($scope.entries);
    };*/

    $scope.submit = function(entry) {
      leaveData.update({  id: entry._id  }, entry);
    };

  });
