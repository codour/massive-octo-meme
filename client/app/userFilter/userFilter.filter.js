'use strict';

angular.module('leave2App')
  .filter('userFilter', function ($q, Auth) {
    /*return function (thisuser) {
      console.log('thisuser ', thisuser );
      console.log('Auth ', Auth );


      if(thisuser.loginID === Auth.getCurrentUser().name){
          return true;
      }
    }*/
    var deferred = $q.defer();

    return function(thisuser) {
     thisuser.loginID === Auth.getCurrentUser().name;
    };


    /*return function(input) {
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
    };*/

  });
