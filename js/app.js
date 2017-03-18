"use strict";

angular.module('myApp', ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
    .when("/", {
      templateUrl: "welcomePage.html"
    })
    .when('/eat-or-cook', {
      templateUrl: "cocokingOrHungry.html"
    })
    .when('event-list', {
      templateUrl: "list.html"
    });
  })
  .controller('EventsController', function() {

    var eventList = [{

    }];

  })
  .controler('WelcomeController', function() {
    
  });
