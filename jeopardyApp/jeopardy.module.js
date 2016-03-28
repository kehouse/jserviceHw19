var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardy',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/jeopardy',{
        templateUrl: "../jeopardyApp/templates/index.html",
        controller: "HomeController"
      })
      .when('/question',{
        templateUrl: "../templates/question.html",
        controller: "HomeController"
      })
  })
