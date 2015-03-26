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

/*<h1>My Profile</h1><br>
 <form>
 <table ng-repeat="entry in entries">
 <tr>Name: <input type=text ng-model="entry.name" name="name" id="name" placeholder={{entry.name}}> &emsp;</tr>
 <tr>Address: <input type=text ng-model="entry.address" name="address" id="address" placeholder={{entry.address}}>&emsp;</tr>
 <tr>Home: <input type=text ng-model="entry.landLine" name="landLine" id="landLine" placeholder={{entry.landLine}}>  &emsp;</tr>
 <tr>Mobile: <input type=text ng-model="entry.mobile" name="mobile" id="mobile" placeholder={{entry.mobile}}>&emsp;</tr>
 <tr><input type="submit" id="submit" value="submit" ng-click="submit(entry)" /></tr>
 </table>
 </form>
 */
