'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('UserProfile', {
        url: '/UserProfile',
        templateUrl: 'app/UserProfile/UserProfile.html',
        controller: 'UserProfileCtrl'
      });
  });