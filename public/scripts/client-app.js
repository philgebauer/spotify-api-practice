var app = angular.module('app', ['ngMaterial','ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  // $locationProvider.hashPrefix('');
  $routeProvider
    .when('/search', {
      templateUrl: '/views/search.html',
      controller: 'SearchController',
      controllerAs: 'search'
    })
    .otherwise({
      redirectTo: '/search'
    });//End route

}]);//End config;
