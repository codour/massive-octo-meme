'use strict';

angular.module('leave2App')
  .controller('SubmitLeaveCtrl', function ($scope, leaveData, Auth) {
    $scope.message = 'Hello';

    // var test = $scope.entry;
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };



    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.entry = {};

    $scope.submit = function() {
      // $scope.entry.push(Auth.getCurrentUser());
      $scope.entry["dateFrom"] = moment($scope.entry["dateFrom"]).toDate();
      $scope.entry["loginID"] = Auth.getCurrentUser().name;
      $scope.entry["approved"] = false;
      leaveData.save($scope.entry);

      console.log ("Submit clicked");
    };



  });
