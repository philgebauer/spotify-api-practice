var app = angular.module('app', ['ngMaterial','ngRoute', 'spotify']);

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

app.filter('spotifyEmbedUrl', function ($sce) {
    return function(uri) {
      return $sce.trustAsResourceUrl('https://embed.spotify.com/?uri=' + uri);
    };
  });
