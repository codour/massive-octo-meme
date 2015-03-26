'use strict';

angular.module('leave2App')
  .controller('SubmitLeaveCtrl', function ($scope, leaveData, Auth) {

    // var test = $scope.entry;
    var mo = moment();

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

    $scope.toggleOpenDatePicker = function($event,datePicker) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope[datePicker] = !$scope[datePicker];
    };


   /* $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };*/

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.format = 'dd.MM.yyyy';

    $scope.entry = {};

    $scope.submit = function() {
      $scope.entry["dateFrom"] = moment($scope.entry["dateFrom"]).toDate();
      $scope.entry["dateTo"] = moment($scope.entry["dateTo"]).toDate();
      $scope.entry["loginID"] = Auth.getCurrentUser().name;
      $scope.entry["approved"] = false;
      leaveData.save($scope.entry);

      console.log ("Submit clicked");
    };



  });

/*<td><label for="Date-From">Date - From: </label></td>
<td><!--<input type=text ng-model="entry.dateFrom" name="dateFrom" id="dateFrom">-->
<input type="text" class="form-control" datepicker-popup="{{format}}" ng-model="entry.dateFrom" is-open="opened" min-date="minDate" max-date="'2020-12-31'" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close" />
</td>
<td><span class="input-group-btn">
<button type="button" class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>
</span><br><br>
</td>*/
