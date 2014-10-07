'use strict';

angular.module('clipApp', [
  'ngRoute',
  'ngAnimate',
  'clipApp.services',
  'clipApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'AuthController'
  })
  .when('/info', {
    templateUrl: 'partials/info.html',
    controller: 'InfoController'
  })
  .otherwise({redirectTo: '/'});
}]);