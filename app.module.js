var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardy',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/question',{
        templateUrl: "templates/question.html",
        controller: "HomeController"
      })
      .when('/404',{
        template: '<h1> You messed up, loser </h1>',
        controller: 'WangController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./controllers/home.controller');
  require('./controllers/question.controller');
  require('./services/api.services');
  require('./services/tiny.services');
  // require('./services/cacheEngineService');
  require('./directives/directive');
