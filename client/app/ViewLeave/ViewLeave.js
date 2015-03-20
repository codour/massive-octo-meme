'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ViewLeave', {
        url: '/ViewLeave',
        templateUrl: 'app/ViewLeave/ViewLeave.html',
        controller: 'ViewLeaveCtrl'
      });
  });