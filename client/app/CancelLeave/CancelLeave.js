'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('CancelLeave', {
        url: '/CancelLeave',
        templateUrl: 'app/CancelLeave/CancelLeave.html',
        controller: 'CancelLeaveCtrl'
      });
  });