angular
  .module('jeopardy')
  .controller('HomeController', function($scope, $http, $q, $location, ApiService) {



    ApiService.getCategories()
      .then(function(catof1) {
        console.log(catof1);
      });

    ApiService.sixThenShits()
      .then(function(weesieShutUp) {
        console.log('PLEASE', weesieShutUp);
        $scope.categories = weesieShutUp[0];
        window.glob = $scope.categories;
        $scope.newAllValues = $scope.categories.map(function(el){
          return el.data
        }).then(function(data){
          $scope.hundred
        })
    });
    // ApiService.getCategories()
    //   .then(function(allValues) {
    //     return allValues.then(function(data) {
    //       console.log("OH SHIT");
    //     });
    //     // console.log(allValues)
    //     // $scope.categories = allValues[0];
    //     // $scope.newAllValues = $scope.categories.map(function(el){
    //     //   return el.$$state.value.data
    //   }).then(function(newShit) {
    //     console.log("LKFDSKLFHLSDK", newShit);
    //   }).then(function(data) {
    //     window.glob = $scope.newAllValues
    //   $q.all($scope.categories.map(function(cat){
    //     console.log("this is filter", cat)
    //     return $http.get(cat.allValues)
    //   })).then(function(data) {
    //     console.log('test',data);
      //   $scope.hundred = data.data.clues.filter(function(el) {
      //     console.log(el);
      //     return el.value === 100 || el.value === 200 || el.value === null;
      //   });
      //   $scope.hundredPts = $scope.hundred[Math.floor(Math.random() * $scope.hundred.length)]
      //   window.globy = $scope.hundredPts
      // })
    // })


    // ApiService.getCategoryOne()
    //   .then(function(data){
    //     console.log(data)
    //     $scope.categoryOne = data.data;
    //   });
    //
    //   ApiService.getCategoryTwo()
    //     .then(function(data){
    //       console.log(data)
    //       $scope.categoryTwo = data.data;
    //     });
    //
    //   ApiService.getCategoryThree()
    //     .then(function(data){
    //       console.log(data)
    //       $scope.categoryThree = data.data;
    //     });
    //
    //   ApiService.getCategoryFour()
    //     .then(function(data){
    //       console.log(data)
    //       $scope.categoryFour = data.data;
    //     });
    //
    //     ApiService.getCategoryFive()
    //       .then(function(data){
    //         console.log(data)
    //         $scope.categoryFive = data.data;
    //       });
    //
    //     ApiService.getCategorySix()
    //       .then(function(data){
    //         console.log(data)
    //         $scope.categorySix = data.data;
    //       });

    // console.log($routeParams.id);
  })
