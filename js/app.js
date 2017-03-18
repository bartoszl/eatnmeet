"use strict";

angular.module('myApp', ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
    .when("/", {
      templateUrl: "welcomePage.html"
    })
    .when('/eat-or-cook', {
      templateUrl: "cookingOrHungry.html"
    })
    .when('event-list', {
      templateUrl: "list.html"
    });
  })
  .controller('EventsController', function($scope) {

    $scope.eventList = [{

    }];

  })
  .controller('WelcomeController', function() {

  });
