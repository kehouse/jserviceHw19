angular
  .module('jeopardy')
  .service('cacheEngine',function($cacheFactory) {
    return $cacheFactory('ApiService');
});
