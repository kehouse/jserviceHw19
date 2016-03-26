angular
  .module('jeopardy')
  .service('ApiService', function($http, $q, $cacheFactory){
    // var categoryOne = 'category?id=7580';
    // var categoryTwo = 'category?id=10181';
    // var categoryThree = 'category?id=11534';
    // var categoryFour = 'category?id=752';
    // var categoryFive = 'category?id=365';
    // var categorySix = 'category?id=11538';

    var cacheEngine = $cacheFactory('jeopardy');

    var url = 'http://jservice.io/api/category?id=';

    function getCategories(){
      var defer = $q.defer();
      var randomNumber = Math.floor(Math.random() * 1200);
      $http.get(url + randomNumber).then(function(data) {
      defer.resolve(data);
        })
      return defer.promise;
    }

    function sixThenShits() {
      return $q.all([getCategories(),getCategories(),getCategories(),getCategories(),getCategories(),getCategories()])
    }


      // var allUrls = [categorySix,categoryFive,categoryFour,categoryThree,categoryTwo,categoryOne]
      // return $q.all([
      //   allUrls.map(function(data) {
      //     var defer = $q.defer();
      //     $http.get(url + data).then(function(catAndQuest) {
      //       defer.resolve(catAndQuest)
      //     })
      //     return defer.promise;
      //   })
      // ]).then(function(data) {
      //   console.log("HELLO", data);
      // })
    // function getCategoryOne() {
    //   return $http.get(url + categoryOne);
    // };
    // function getCategoryTwo() {
    //   return $http.get(url + categoryTwo);
    // };
    // function getCategoryThree() {
    //   return $http.get(url + categoryThree);
    // };
    // function getCategoryFour() {
    //   return $http.get(url + categoryFour);
    // };
    // function getCategoryFive() {
    //   return $http.get(url + categoryFive);
    // };
    // function getCategorySix() {
    //   return $http.get(url + categorySix);
    // };
    return {
      // getCategoryOne: getCategoryOne,
      // getCategoryTwo: getCategoryTwo,
      // getCategoryThree: getCategoryThree,
      // getCategoryFour: getCategoryFour,
      // getCategoryFive: getCategoryFive,
      // getCategorySix: getCategorySix,
      getCategories: getCategories,
      sixThenShits: sixThenShits
    }
  })
