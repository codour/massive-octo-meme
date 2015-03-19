'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AdminDashboard', {
        url: '/AdminDashboard',
        templateUrl: 'app/AdminDashboard/AdminDashboard.html',
        controller: 'AdminDashboardCtrl'
      });
  });