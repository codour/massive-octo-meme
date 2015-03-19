'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ManageLeave', {
        url: '/ManageLeave',
        templateUrl: 'app/ManageLeave/ManageLeave.html',
        controller: 'ManageLeaveCtrl'
      });
  });