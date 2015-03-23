'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Roster', {
        url: '/Roster',
        templateUrl: 'app/Roster/Roster.html',
        controller: 'RosterCtrl'
      });
  });