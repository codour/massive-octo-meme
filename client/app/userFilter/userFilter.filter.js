'use strict';

angular.module('leave2App')
  .filter('userFilter', function (thisuser) {
    function isSameUser(thisuser) {
      //return 'userFilter filter: ' + input;
      return thisuser === Auth.getCurrentUser().name;
    }

    isSameUser.$stateful = true;

    return isSameUser;
  });
