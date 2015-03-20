'use strict';

/*angular.module('leave2App')
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
})*/
angular.module('leave2App')
  .factory('leaveData', function ($resource) {
    return $resource('/api/leaveData/:id/', {
        id: '@_id'
      },
      {
        'update': {
          method: 'PUT'
        },

        'view': {
          method: 'GET'
        },

      });
  });
/*{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };*/
