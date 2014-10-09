'use strict';

/* Controllers */

angular.module('clipApp.controllers', [])
  .controller('InfoController', ['$scope', 'infoService', 'authService', '$location', function($scope, infoService, authService, $location) {

    // Bind user's parties to $scope.parties.
    authService.getCurrentUser().then(function(user) {
      if (user) {
          $scope.rootItems = infoService.firstPull(user);
          $scope.currentDir = $scope.rootItems[$scope.rootItems.length - 1];
          $scope.getNewData(); // Default currentDir to users repo and pull data
      };
    });

    $scope.getNewData = function(){
      $scope.snippets = infoService.directoryPull($scope.currentDir.$id);
    }

    $scope.addSnippet = function(text){
            $scope.snippets.$add({text: text});
            document.querySelector('form input').value = '';
        }

    $scope.edit = function($index){
      var current = document.querySelector('#snippet-container-' + $index + ' input');
      current.removeAttribute('disabled');
    }

    $scope.copy = function($index){
      var current = $index
          ,area = document.querySelector('#snippet-container-' + current + ' input');

            area.removeAttribute('disabled');
            area.focus();
            document.execCommand('SelectAll');
            document.execCommand("Copy", false, null);
            area.setAttribute('disabled', 'disabled');

                 var currDir = $scope.currentDir.$id;

                 if (area.value.indexOf('http') === 0){ //!(currDir.indexOf('Links') === -1) &&
                      chrome.tabs.create({url: area.value});
                 }
      }

      $scope.disable = function($index){
          document.querySelector('#snippet-container-' + $index + ' input')
              .setAttribute('disabled','disabled');
      }

      $scope.logout = function(){
          authService.logout();
          $location.path('/login');
      }

      $scope.show = function(){
        this.hover = true;
      }

      $scope.hide = function(){
        this.hover = false;
      }

  }])
  .controller('AuthController', ['$scope', '$location', 'authService', function($scope, $location, authService) {

    authService.getCurrentUser().then(function(user){
      if (user) {
        $location.path('/info');
      }else{
        $location.path('/login');
      }
    });
    // Object bound to inputs on the register and login pages.
    $scope.user = {email: '', password: ''};

    // Method to log in a user using the authService.
    $scope.login = function() {
      authService.login($scope.user);
    };

    // Method to log out user using the authService.
    $scope.logout = function() {
      authService.logout();
    };

  }]);
