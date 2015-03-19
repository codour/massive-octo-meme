'use strict';

angular.module('leave2App')
  .service('leaveData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var userEntries = {

         newEntry:[],

         submit: function() {

      },

         view: function() {

      },

         edit: function() {

      },

         cancel: function() {

      }
  };
    return userEntries;
})
