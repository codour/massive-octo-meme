'use strict';

angular.module('leave2App')
  .controller('CalendarpageCtrl', function ($scope,$compile,uiCalendarConfig,leaveData) {



    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var currentView = "month";

    $scope.eventRender = function( event, element, view ) {
      element.attr({'tooltip': event.title,
        'tooltip-append-to-body': true});
      $compile(element)($scope);
    };

    $scope.events=[];
   /* $scope.events =

      [
        {title: 'All t Day Event',start: new Date('Thu Oct 19 2013 09:00:00 GMT+0530 (IST)')},
        {title: 'All Day Event',start: new Date('Thu Oct 17 2013 09:00:00 GMT+0530 (IST)')},
        {title: 'Long Event',start: new Date('Thu Oct 17 2013 10:00:00 GMT+0530 (IST)'),end: new Date('Thu Oct 17 2013 17:00:00 GMT+0530 (IST)')},
        {id: 999,title: 'Repeating Event',start: new Date('Thu Oct 17 2013 09:00:00 GMT+0530 (IST)'),allDay: false},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
        {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
        {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];*/

    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

    /*$scope.leaveEntries = [];
    $scope.test = leaveData.query()

      .$promise.then(function(res){
        console.log(res);
        $scope.leaveEntries =  res;
        //console.log($scope.leaveEntries[0]);
      });

    //$scope.test1 = typeof $scope.test;

    for(var i = 0; i< $scope.test.length; i++){
      console.log($scope.leaveEntries[i]);
    }
*/
    $scope.leaveEntries = [];
    $scope.test = leaveData.query()

      .$promise.then(function(res){
        console.log(res);
        $scope.leaveEntries =  res;
        console.log($scope.leaveEntries[0]);
      });


    /* for	(var i = 0; i < $scope.leaveEntries.length; i++) {
     console.log(i);
     if($scope.leaveEntries[i].approved){
     //console.log($scope.leaveEntries[i].approved);
     }
     }*/
  });
