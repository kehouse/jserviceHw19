var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardy',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "jeopardyApp/templates/index.html",
        controller: "HomeController as HomeCtrl"
      })
      // .when('/question',{
      //   templateUrl: "../templates/question.html",
      //   controller: "HomeController"
      // })
  })
