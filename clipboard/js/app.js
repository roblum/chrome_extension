'use strict';

angular.module('clipApp', [
  'ngRoute',
  'ngAnimate',
  'clipApp.services',
  'clipApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });
  $routeProvider.when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'AuthController'
  });
  $routeProvider.when('/info', {
    templateUrl: 'partials/info.html',
    controller: 'InfoController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);