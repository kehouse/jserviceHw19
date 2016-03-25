angular
  .module('jeopardy')
  .directive('jeopardyReader', function(){
    return {
      templateUrl: '../templates/jeopardy-reader.html',
      restrict: 'E',
      scope: {
        question: '='
      }
    }
  })
