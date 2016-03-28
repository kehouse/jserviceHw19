var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardyapp',[
    'ngRoute',
    'jeopardy'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "main.html",
        controller: "HomeController"
      })
      .when('/404',{
        template: '<h1> You messed up, loser </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./jeopardyApp');
