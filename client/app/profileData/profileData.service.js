'use strict';

angular.module('leave2App')
  .factory('profileData', function ($resource) {
    // Service logic
    // var meaningOfLife = 42;

    // Public API here
    return $resource('/api/UserProfile/:id/', {
        id: '@_id'
      },
      {
        'update': {
          method: 'PUT'
        }

        /*,'view': {
          method: 'GET', isArray: true
        }*/

      });
  });
