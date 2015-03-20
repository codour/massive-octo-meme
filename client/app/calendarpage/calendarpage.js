'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calendarpage', {
        url: '/calendarpage',
        templateUrl: 'app/calendarpage/calendarpage.html',
        controller: 'CalendarpageCtrl'
      });
  });