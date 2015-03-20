'use strict';

angular.module('leave2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('SubmitLeave', {
        url: '/SubmitLeave',
        templateUrl: 'app/SubmitLeave/SubmitLeave.html',
        controller: 'SubmitLeaveCtrl'
      });
  });