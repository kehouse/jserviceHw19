angular
  .module('jeopardy')
  .directive('jeopardyReader', function(){
    return {
      templateUrl: '../templates/jeopardy-reader.html',
      restrict: 'E',
      scope: {
        question: '='
      },
      controller: function($rootScope, $scope){
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
