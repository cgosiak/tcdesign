var tcDesignApp = angular.module('tcDesignApp', [
    'ngRoute',
    'tcDesignControllers',
    'tcDesignFactory',
    'tcDesignDirective'
]);


tcDesignApp.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    }).
    when('/Services', {
        templateUrl: 'templates/services.html',
        controller: 'ServiceListCtrl'
    }).
    when('/ContactUs', {
        templateUrl: 'templates/contact.html',
        controller: 'ServiceListCtrl'
    }).
    when('/WhoWeAre', {
        templateUrl: 'templates/who_we_are.html',
        controller: 'ServiceListCtrl'
    }).
    when('/:serviceId', {
        templateUrl: 'templates/service-detail.html',
        controller: 'ServiceDetailCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});
