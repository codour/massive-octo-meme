'use strict';

angular.module('leave2App')
  .filter('userFilter', function (Auth) {
    /*return function (thisuser) {
      console.log('thisuser ', thisuser );
      console.log('Auth ', Auth );


      if(thisuser.loginID === Auth.getCurrentUser().name){
          return true;
      }
    }*/

    return function(input) {

      var rs = [];

      input.$promise.then(function (resource) {
        for ( var x in resource ){
          if(resource[x].loginID === Auth.getCurrentUser().name ){
            rs.push(resource[x]);
          }
        }
        console.log('rs', rs );
        return rs;
      });
    };

  });
