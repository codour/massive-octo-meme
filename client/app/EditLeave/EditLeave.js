'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('EditLeave', {
        url: '/EditLeave',
        templateUrl: 'app/EditLeave/EditLeave.html',
        controller: 'EditLeaveCtrl'
      });
  });