angular.module('tcDesignDirective', [])
       .directive('service', function(){
  return {
    scope: { service: '=' },
    restrict: 'A',
    templateUrl: 'templates/service.html',
    controller: function($scope, services){
      services.find($scope.service.id, function(service) {
        $scope.serviceURL = service.serviceURL;
        $scope.details = service.details;
        $scope.continue = service.continue;
        $scope.cardColor = service.cardColor;
      });
    }
  };
});