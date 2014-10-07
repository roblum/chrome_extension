'use strict';

/* Controllers */

angular.module('clipApp.controllers', [])
  .controller('HomeController', [function() {

  }])
  .controller('InfoController', ['$scope', 'infoService', 'authService', function($scope, infoService, authService) {

    // Bind user's parties to $scope.parties.
    authService.getCurrentUser().then(function(user) {
      if (user) {
        $scope.rootItems = infoService.firstPull();
      };
    });

    $scope.currentDirectory = {dir : ''};

    $scope.getNewData = function(){
      infoService.directoryPull($scope.currentDirectory);
    }

    $scope.addSnippet = function(text){
            console.log('snippet ran');
            $scope.snippets.$add({text: text});
            document.querySelector('form input').value = '';
        }

    $scope.edit = function($index){
      var current = document.querySelector('#snippet-container-' + $index + ' input');
      current.removeAttribute('disabled');
    }

    $scope.button = function($index){
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

      $scope.hover = false;

      $scope.show = function(){
        this.hover = true;
      }

      $scope.hide = function(){
        this.hover = false;
      }

  }])
  .controller('AuthController', ['$scope', 'authService', function($scope, authService) {

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
