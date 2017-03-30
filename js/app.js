"use strict";
var app = angular.module('myApp', ['ngRoute', "ngSanitize", "720kb.datepicker"])
        .config(function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        templateUrl: "welcomePage.html",
                        controller: "WelcomeController"
                    })
                    .when('/eat-or-cook', {
                        templateUrl: "cookingOrHungry.html",
                        controller: "CookOrHungryController"
                    })
                    .when('/event-list', {
                        templateUrl: "list.html",
                        controller: "EventsController"
                    })
                    .when('/event-form', {
                        templateUrl: "NewEvent.html",
                        controller: "EventsController"
                    })
                    .when('/profile/:id', {
                        templateUrl: "profile.html",
                        controller: "EventsController"
                    })
                    .when('/event/:id', {
                        templateUrl: "event.html",
                        controller: "EventsController"
                    })
                    .when('/hosting-events', {
                        templateUrl: "hostingEvents.html",
                        controller: "EventsController"
                    })
                    .when('/attending-events', {
                        templateUrl: "attendingEvents.html",
                        controller: "EventsController"
                    })
                    .when('/previous-events', {
                        templateUrl: "previousEvents.html",
                        controller: "EventsController"
                    })
                    .when('/map', {
                        templateUrl: "map.html",
                        controller: "MapController"
                    });
        })
        .controller('EventsController', function ($scope, $routeParams, $location) {
            var people = [{
                    id: 3,
                    name: "Zlatan",
                    description: "Hey there! I am from Sweden and the best cook. I know all the secrets of the Swedish cuisine and I can prove it. You are already invited to my dinner.",
                    rating: 5,
                    no_rates: 5,
                    city: "Glasgow",
                    upcoming_event_id: [3],
                    visited_events_id: [2],
                    profile_image: "/images/profile3.jpg"
                }, {
                    id: 1,
                    name: "Chris",
                    description: "Welcome to my profile page! I am from Greece and I will be hosting many greek meals in the future. I will keep you posted.",
                    rating: 4,
                    no_rates: 5,
                    city: "Glasgow",
                    upcoming_event_id: [3],
                    visited_events_id: [0],
                    profile_image: "/images/profile1.jpg"
                }, {
                    id: 0,
                    name: "Daniel",
                    description: "Yooo! I am from Hungary and I always love to eat with other people. I am a good cook! Stay tuned for my recent events.",
                    rating: 4,
                    no_rates: 5,
                    city: "Glasgow",
                    upcoming_event_id: [0],
                    visited_events_id: [0],
                    profile_image: "/images/profile0.jpg"
                }, {
                    id: 5,
                    name: "Robert",
                    description: "Welcome to my profile page! I am from England and I will be hosting many great meals in the future. Don't miss any of them.",
                    rating: 4,
                    no_rates: 5,
                    city: "Glasgow",
                    upcoming_event_id: [3],
                    visited_events_id: [0],
                    profile_image: "/images/profile5.jpg"
                }, {
                    id: 6,
                    name: "Emma",
                    description: " I just created my new profile! I am from Argentina and I will be hosting many local meals in the future. Have a nice day!",
                    rating: 4,
                    no_rates: 5,
                    city: "Glasgow",
                    upcoming_event_id: [3],
                    visited_events_id: [0],
                    profile_image: "/images/profil6.jpg"
                }, {
                    id: 4,
                    name: "Eva",
                    description: "Hello there! I am from Greece and I will be hosting many greek meals in the future. I will keep you posted. Don't miss any of them!",
                    rating: 4,
                    no_rates: 5,
                    city: "Glasgow",
                    upcoming_event_id: [5],
                    visited_events_id: [0],
                    profile_image: "/images/profile4.jpg"
                }, {
                    id: 2,
                    name: "Margot",
                    description: "Hey! I am from Australia and I will be hosting many Italian meals in the future (even if I am from Australia). Don't miss any of it.",
                    rating: 3,
                    no_rates: 5,
                    city: "Glasgow",
                    upcoming_event_id: [4],
                    visited_events_id: [1],
                    profile_image: "/images/profile2.jpg"
                }];
            var events = [{
                    id: 0,
                    host_id: 0,
                    time: new Date(1970, 0, 1, 18, 0, 0),
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
                    time: new Date(1970, 0, 1, 18, 0, 0),
                    date: new Date("February 21, 2017 19:30:00"),
                    street: '22 Duke Street',
                    city: 'Glasgow',
                    cuisine: 'Australian Fusion',
                    description: 'I will be cooking australian food with a little italian twist.',
                    price: '15',
                    picture: '/images/event1.jpg'
                }, {
                    id: 2,
                    host_id: 1,
                    time: new Date(1970, 0, 1, 18, 0, 0),
                    date: new Date("March 03, 2017 18:30:00"),
                    street: '13 George Street',
                    city: 'Glasgow',
                    cuisine: 'Swedish',
                    description: 'Come and taste my traditional meatballs. You will definitely thank me later.',
                    price: '8',
                    picture: '/images/event2.jpg'
                }, {
                    id: 3,
                    host_id: 5,
                    time: new Date(1970, 0, 1, 18, 0, 0),
                    date: new Date("April 02, 2017 16:30:00"),
                    street: '68 Ingram Street',
                    city: 'Glasgow',
                    cuisine: 'Greek',
                    description: 'I plan to make the best gyros you will ever find in Glasgow.',
                    price: '9',
                    picture: '/images/event3.jpg'
                }, {
                    id: 4,
                    host_id: 3,
                    time: new Date(1970, 0, 1, 18, 0, 0),
                    date: new Date("April 12, 2017 20:30:00"),
                    street: '22 Duke Street',
                    city: 'Glasgow',
                    cuisine: 'Australian',
                    description: 'I will cook some of the best recipes my mom taught me.',
                    price: '14',
                    picture: '/images/event4.jpg'
                }, {
                    id: 5,
                    host_id: 3,
                    time: new Date(1970, 0, 1, 18, 0, 0),
                    date: new Date("April 23, 2017 17:00:00"),
                    street: '13 George Street',
                    city: 'Glasgow',
                    cuisine: 'International',
                    description: 'Zlatan will take you for a trip around the world with some of the best international dishes',
                    price: '9',
                    picture: '/images/event5.jpg'
                }, {
                    id: 6,
                    host_id: 4,
                    time: new Date(1970, 0, 1, 18, 0, 0),
                    date: new Date("April 23, 2017 17:00:00"),
                    street: '13 George Street',
                    city: 'Glasgow',
                    cuisine: 'International',
                    description: 'I will take you for a trip around the world with some of the best international dishes. All welcome',
                    price: '9',
                    picture: '/images/event6.png'
                }];

            var filter = document.getElementById('filter');

            $scope.toggleFilter = function() {
              if(!filter.classList.contains("show")) {
                filter.classList.add("show");
              } else {
                filter.classList.remove("show");
              }
            };

            if (localStorage.getItem('events') !== null){
                events = angular.fromJson(localStorage.events);
            }

            $scope.eventList = events;
            $scope.people = people;
            $scope.currentUserId = 3;

            $scope.eventToAdd = {
                id: events.length,
                host_id: 3,
                time: new Date(1970, 0, 1, 18, 0, 0),
                date: "Select date",
                street: "Street name",
                city: 'Glasgow',
                cuisine: 'Cuisine type',
                description: 'Description',
                price: 0,
                picture: '/images/event6.png'
            };
            $scope.addEvent = function (eventToAdd) {

                events.push({
                    id: $scope.eventToAdd.id,
                    host_id: $scope.eventToAdd.host_id,
                    time: $scope.eventToAdd.time,
                    date: $scope.eventToAdd.date,
                    street: $scope.eventToAdd.street,
                    city: $scope.eventToAdd.city,
                    cuisine: $scope.eventToAdd.cuisine,
                    description: $scope.eventToAdd.description,
                    price: $scope.eventToAdd.price,
                    picture: '/images/event6.png'
                });
                console.log("added");
                $scope.saveEvents();
                $location.path('/event-list');

            };

            $scope.saveEvents = function (){
                localStorage.events = angular.toJson(events);
                console.log("Save");
            };

            $scope.loadEvents = function () {
                return angular.fromJson(localStorage.events);


            };
            $scope.getUserById = function () {
                var id = $routeParams.id;
                // for loop through all profiles
                // return profile where id === id
                var user;
                $scope.people.map(function (person) {
                    if (person.id == id) {
                        user = person;
                    }
                });
                return user;
            };
            $scope.getEventById = function () {
                var id = $routeParams.id;
                var ev;
                $scope.eventList.map(function (event) {
                    if (event.id == id) {
                        ev = event;
                    }
                });
                return ev;
            };
            $scope.getNameForEvent = function (host_id) {
                var name = "";
                $scope.people.map(function (person) {
                    if (person.id === host_id) {
                        name = person.name;
                    }
                });
                return name;
            };


            $scope.drawStars = function(host_id) {
                var inner = "";
                $scope.people.map(function (person) {
                    if (person.id === host_id) {
                        var fullStars = person.rating;
                        var emptyStars = 5-fullStars;
                        while(fullStars-->0){
                            inner +=' <i class="fa fa-star yellow-star" aria-hidden="true" ng-click="rate(1, event.host_id)"></i>';

                        }
                        while(emptyStars-->0){
                            inner +=' <i class="fa fa-star-o empty-star" aria-hidden="true" ng-click="rate(4, event.host_id)"></i>';
                        }
                    }
                });
            return inner;
            };


            $scope.getWeekDayName = function (date) {
                switch (date.getDay()) {
                    case 0:
                        return "Sunday";
                    case 1:
                        return "Monday";
                    case 2:
                        return "Tuesday";
                    case 3:
                        return "Wednesday";
                    case 4:
                        return "Thurdsay";
                    case 5:
                        return "Friday";
                    case 6:
                        return "Saturday";
                }
            };
            $scope.getMonthName = function (date) {
                switch (date.getMonth()) {
                    case 0:
                        return "January";
                    case 1:
                        return "February";
                    case 2:
                        return "March";
                    case 3:
                        return "April";
                    case 4:
                        return "May";
                    case 5:
                        return "June";
                    case 6:
                        return "July";
                    case 7:
                        return "August";
                    case 8:
                        return "September";
                    case 9:
                        return "October";
                    case 10:
                        return "November";
                    case 11:
                        return "December";
                }
            };
            $scope.getMinutes = function (date) {
                var min = date.getMinutes();
                if (min === 0) {
                    return "00";
                } else {
                    return min;
                }
            };

            $scope.rate = function (new_rate, host_id) {
                $scope.people = $scope.people.map(function (person) {
                    if (person.id === host_id) {
                        var score = (person.no_rates * person.rating + new_rate) / (++person.no_rates);
                        person.rating = score;
                    }
                    return person;
                });
            };

            $scope.hostingEvents = function () {
                events = [];
                $scope.eventList.forEach(function (event) {
                    if (event.host_id === $scope.currentUserId) {
                        events.push(event);
                    }
                });
                return events;
            };

            $scope.attendingEvents = function () {
                events = [];
                $scope.people.forEach(function (person) {
                    if (person.id === $scope.currentUserId) {
                        person.upcoming_event_id.forEach(function (event_id) {
                            $scope.eventList.forEach(function (event) {
                                if (event.id === event_id) {
                                    events.push(event);
                                }
                            });
                        });
                    }
                });
                return events;
            };



            $scope.previousEvents = function () {
                events = [];
                $scope.people.forEach(function (person) {
                    if (person.id === $scope.currentUserId) {
                        person.visited_events_id.forEach(function (event_id) {
                            $scope.eventList.forEach(function (event) {
                                if (event.id === event_id) {
                                    events.push(event);
                                }
                            });
                        });
                    }
                });
                return events;
            };

            $scope.eventDetails = function (event) {
                details = [];
                details.push(event.date);
                details.push(event.street);
                details.push(event.city);
                details.push(event.cuisine);
                details.push(event.description);
                details.push(event.price);
            };

            $scope.getIdFromUrl = function() {
              console.log($routeParams.id);
              return $routeParams.id;
            };

            $scope.goToProfile = function(id) {
                $location.path('/profile/'+id);
                //$scope.$apply();
            };
            $scope.goToEvent = function(id) {

                $location.path('/event/'+id);
                $scope.loadEvents();
                //$scope.$apply();
            };

            $scope.sortByNameAZ = function() {
              $scope.eventList.sort(function(a, b) {
                  var textA = a.DepartmentName.toUpperCase();
                  var textB = b.DepartmentName.toUpperCase();
                  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
              });
              $scope.toggleFilter();
            };

            $scope.sortByPriceDesc = function() {
              $scope.eventList.sort(function(a, b) {
                  return a.price - b.price;
              });
              $scope.toggleFilter();
            };

            $scope.sortByPriceAsc = function() {
              $scope.eventList.sort(function(a, b) {
                  return b.price - a.price;
              });
              $scope.toggleFilter();
            };

            $scope.sortByRatingDesc = function() {
              $scope.eventList.sort(function(a, b) {
                  var a_rating;
                  people.map(function(person){
                    if(person.id == a.host_id){
                      a_rating = person.rating;
                    }
                  });
                  var b_rating;
                  people.map(function(person){
                    if(person.id == b.host_id){
                      b_rating = person.rating;
                    }
                  });
                  return a_rating - b_rating;
              });
              $scope.toggleFilter();
            };

            $scope.sortByRatingAsc = function() {
              $scope.eventList.sort(function(a, b) {
                  var a_rating;
                  people.map(function(person){
                    if(person.id == a.host_id){
                      a_rating = person.rating;
                    }
                  });
                  var b_rating;
                  people.map(function(person){
                    if(person.id == b.host_id){
                      b_rating = person.rating;
                    }
                  });
                  return b_rating - a_rating;
              });
              $scope.toggleFilter();
            };

            $scope.sortByDateAsc = function() {
              $scope.eventList.sort(function(a, b) {
                  return a.date - b.date;
              });
              $scope.toggleFilter();
            };

            $scope.sortByDateDesc = function() {
              $scope.eventList.sort(function(a, b) {
                  return b.date - a.date;
              });
              $scope.toggleFilter();
            };
        })

        .controller('WelcomeController', function ($scope, $location) {
            var timer = setTimeout(function () {
                $location.path('/eat-or-cook');
                $scope.$apply();
            }, 1000);
        })
        .controller('CookOrHungryController', function ($scope, $location) {
            $scope.goToList = function () {
                $location.path('/event-list');
                //$scope.$apply();
            };
            $scope.goToNewEvent = function () {
                $location.path('/event-form');
                //$scope.$apply();
            };
        })
        .controller('MapController', function($scope, $location) {
          function initMap() {
              var glasgow = {lat: 55.864, lng: -4.251};
              var map = document.getElementById('map');
              var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 15,
                  center: glasgow,
                  streetViewControl: false,
                  fullscreenControl: false,
                  mapTypeControl: false,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              });
              var image = 'images/bluedot.png';


              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (position) {
                      var pos = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                      };
                      map.setCenter(pos);
                      var marker = new google.maps.Marker({
                          position: pos,
                          map: map,
                          icon: image
                      });
                      var pos2 = pos;
                      pos2.lat = pos2.lat + 0.002;
                      var marker2 = new google.maps.Marker({
                          position: pos2,
                          map: map

                      });
                  });
              }
          };

          initMap();

        });
