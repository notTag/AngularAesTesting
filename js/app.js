/* global angular */
var app = angular.module('app', ['ngLess', "ngRoute", 'mdo-angular-cryptography']);

app.config(function ($routeProvider, $cryptoProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/ntst.html"
    })
    .when("/ntst", {
        templateUrl : "html/ntst.html"
    })
    .when("/angularAES", {
        templateUrl : "html/AngularAESTest.html"
    })
    .when("/bigIntFibonacci", {
        templateUrl : "html/BigIntFibonacci.html"
    })
    .when("/macro", {
        templateUrl : "html/MacroCalc.html"
    })
    .when("/conway", {
        templateUrl : "html/ConwayGameOfLife.html"
    });

    $locationProvider.html5Mode(true); 
    $cryptoProvider.setCryptographyKey('ABCD123');
});


/*TO DO: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll*/
//$(document).ready(function(){
//  // Add smooth scrolling to all links
//  $("a").on('click', function(event) {
//
//    // Make sure this.hash has a value before overriding default behavior
//    if (this.hash !== "") {
//      // Prevent default anchor click behavior
//      event.preventDefault();
//
//      // Store hash
//      var hash = this.hash;
//
//      // Using jQuery's animate() method to add smooth page scroll
//      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//      $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 800, function(){
//   
//        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
//      });
//    } // End if
//  });
//});
