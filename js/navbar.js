"use strict";

app.component("eatNavbar",{
      templateUrl: "templates/navbar.html",
      controller: function($scope) {
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
      }
  });
