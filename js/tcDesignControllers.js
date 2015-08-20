var tcDesignControllers = angular.module('tcDesignControllers', []);

tcDesignControllers.controller('HomeCtrl', function ($scope, upates) {
    upates.list(function (upates) {
        $scope.upates = upates;
    });
});

tcDesignControllers.controller('ServiceListCtrl', function ($scope, services, $location) {
    services.list(function (services) {
        $scope.services = services;
    });

    $scope.go = function (path) {
        $location.path(path);
    };
});

tcDesignControllers.controller('ServiceDetailCtrl', function ($scope, $routeParams, services, $location) {
    services.find($routeParams.serviceId, function (service) {
        $scope.service = service;
    });
    
    $scope.go = function (path) {
        $location.path(path);
    };
});
