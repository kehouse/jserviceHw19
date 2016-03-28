angular
  .module('jeopardy')
  .directive('jeopardyReader', function(){
    return {
      templateUrl: '../../jeopardyApp/templates/jeopardy-reader.html',
      restrict: 'E',
      scope: {
        question: '='
      },
      controller: function($rootScope, $scope){
        $scope.addScore = function(input, answer, val){
           if(input === answer){
           $rootScope.score += val;
           } else {
             $rootScope.score -= val;
           }
         };
        $scope.toggleBtn = function(id){
          $('div.' + id).toggle();
        }
        $scope.disableBtn = function(id){
          $('button.' + id).prop('disabled', true);
          $('#' + id).modal('hide');
        }
      }
    }
  })
