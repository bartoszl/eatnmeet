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
    .when('/event-list', {
      templateUrl: "list.html"
    })
    .when('/event-form', {
      templateUrl: "NewEvent.html"
    });
  })
  .controller('EventsController', function($scope) {

      var people = [{
          id: 3,
          name: Zlatan,
          description: "Hey there! I am from Sweden and the best cook. I know all the secrets of the Swedish cuisine and I can prove it. You are already invited to my dinner.",
          rating: 5,
          city: Glasgow,
          upcoming_event_id: [5],
          visited_events_id: [2],
          profile_image: "/images/profile3.jpg"
      },{
          id: 1,
          name: Chris,
          description: "Welcome to my profile page! I am from Greece and I will be hosting many greek meals in the future. I will keep you posted.",
          rating: 4,
          city: Glasgow,
          upcoming_event_id: [3],
          visited_events_id: [0],
          profile_image: "/images/profile1.jpg"
      },{
          id: 2,
          name: Margot,
          description: "Welcome to my profile page! I am from Australia and I will be hosting many Italian meals in the future (even if I am from Australia). Don't miss any of it.",
          rating: 3,
          city: Glasgow,
          upcoming_event_id: [4],
          visited_events_id: [1],
          profile_image: "/images/profile2.jpg"
      }];

      var events = [{
          id: 0,
          host_id: 1,
          date: new Date("February 13, 2017 18:00:00"),
          street: '68 Ingram Street',
          city: 'Glasgow',
          cuisine: 'Greek',
          description: 'First ever event made using Eat N Meet, everybody is welcome to join',
          price: '10',
          picture: '/images/event0.jpg'
      }, {
          id: 1,
          host_id: 2,
          date: new Date("February 21, 2017 19:30:00"),
          street: '22 Duke Street',
          city: 'Glasgow',
          cuisine: 'Australian Fusion',
          description: 'I will be cooking australian food with a little italian twist.',
          price: '15',
          picture: '/images/event1.jpg'
      }, {
          id: 2,
          host_id: 0,
          date: new Date("March 03, 2017 18:30:00"),
          street: '13 George Street',
          city: 'Glasgow',
          cuisine: 'Swedish',
          description: 'Come and taste traditional Zlatans meatballs. You will definitely thank me later.',
          price: '8',
          picture: '/images/event2.jpg'
      }, {
          id: 3,
          host_id: 1,
          date: new Date("April 02, 2017 16:30:00"),
          street: '68 Ingram Street',
          city: 'Glasgow',
          cuisine: 'Greek',
          description: 'I plan to make the best gyros you will ever find in Glasgow.',
          price: '9',
          picture: '/images/event3.jpg'
      }, {
          id: 4,
          host_id: 2,
          date: new Date("April 12, 2017 20:30:00"),
          street: '22 Duke Street',
          city: 'Glasgow',
          cuisine: 'Australian',
          description: 'I will cook some of the best recipes my mom taught me.',
          price: '14',
          picture: '/images/event4.jpg'
      },{
          id: 5,
          host_id: 0,
          date: new Date("April 23, 2017 17:00:00"),
          street: '13 George Street',
          city: 'Glasgow',
          cuisine: 'International',
          description: 'Zlatan will take you for a trip around the world with some of the best international dishes',
          price: '9',
          picture: '/images/event5.jpg'
      }];

    $scope.eventList = [{

    }];

  })
  .controller('WelcomeController', function() {

  });
