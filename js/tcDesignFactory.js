angular.module('tcDesignFactory', [])
       .factory('services', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'json/services.json',
        cache: true
      }).success(callback);
    },
    find: function(id, callback){
      $http({
        method: 'GET',
        url: 'json/service_' + id + '.json',
        cache: true
      }).success(callback);
    }
  };
});