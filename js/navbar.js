"use strict";

app.component("eatNavbar",{
      templateUrl: "templates/navbar.html",
      controller: function($scope, $location) {
        $scope.toggleNavbar = function() {
          var navbar = document.getElementById('menuItems');
          var navbarButton = document.getElementById('navbar-button');

          if(!navbar.classList.contains("show")) {
            navbar.classList.add("show");
            navbarButton.classList.remove("collapsed");
          } else {
            navbar.classList.remove("show");
            navbarButton.classList.add("collapsed");
          }

        };
        
         $scope.goHome = function() {
                $location.path('/eat-or-cook');
                $scope.toggleNavbar();
            };
         
            
         $scope.goToYourEvents= function() {
                $location.path('/hosting-events');
                $scope.toggleNavbar();
            };
            
         $scope.goToAttendingEvents= function() {
                $location.path('/attending-events');
                $scope.toggleNavbar();
            };
            
          $scope.goToNewEvent= function() {
                $location.path('/event-form');
                $scope.toggleNavbar();
            };
           
            
         $scope.goToPreviousEvent= function() {
                $location.path('/previous-events');
                $scope.toggleNavbar();
            };
            
            

      }
  });
