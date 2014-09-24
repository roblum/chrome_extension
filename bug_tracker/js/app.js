var bugApp = angular.module('bugApp', ['ngAnimate', 'firebase']);

bugApp.controller('mainDirectory', function($scope, $firebase){

	$scope.button = function($index){
		var current = $index
	    	,area = document.querySelector('#snippet-container-' + current + ' input');

		    area.focus();
		    document.execCommand('SelectAll');
		    document.execCommand("Copy", false, null);
	}

	$scope.hover = false;

	$scope.show = function(){
		this.hover = true;
	}

	$scope.hide = function(){
		this.hover = false;
	}

});




bugApp.controller('MainCtrl', function ($scope, $firebaseSimpleLogin, $firebase, dataService) {
     var ref = new Firebase("https://clipboard-list.firebaseio.com/snippets");
     // create an AngularFire reference to the data
     var sync = $firebase(ref);

     // $scope.login = false;

     // download the data into a local object
     $scope.snippets = sync.$asArray();

     $scope.addSnippet = function(text){
          console.log('snippet ran');
          $scope.snippets.$add({text: text});
     }


     var loginConfirmation = function() {
          // This service's function returns a promise, but we'll deal with that shortly
               dataService.getLogin()
                    // then() called when son gets back
                    .then(function(data) {
                         // promise fulfilled
                         // if (data.forecast==='good') {
                         //      // prepareFishingTrip();
                         // } else {
                         //      // prepareSundayRoastDinner();
                         // }
                    }, function(error) {
                         // promise rejected, could log the error with: console.log('error', error);
                         // prepareSundayRoastDinner();
                    });
     };

});


bugApp.factory('dataService', function ($http, $q) {
    return {
        getLogin: function() {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default
               var firebaseRef = new Firebase('https://bug-tracker.firebaseio.com/');
               $scope.auth = $firebaseSimpleLogin(firebaseRef);

               $scope.dummySignin = function() {
                    console.log('signing in...');

                    $scope.auth.$login('password', {
                         email: 'asdf@asdf.asdf',
                         password: 'asdf'
                    }).then(function(user) {
                         console.log('user: ', user);
                         $scope.login = true;
                    }, function(error) {
                         console.log('error: ', error);
                         $scope.login = false;
                    });
               };

        }
    };
});

// bugApp.controller("MyAuthCtrl", ["$scope", "$firebaseSimpleLogin",

// 	function($scope, $firebaseSimpleLogin) {
// 	    var dataRef = new Firebase("https://clipboard-list.firebaseio.com");
// 	    $scope.loginObj = $firebaseSimpleLogin(dataRef);
// 	    console.log('simple login angular fire ran');
// 	    console.log($scope.loginObj);

// 	      	$scope.loginObj.$login("password", {
// 			   email: "asdf@asdf.asdf",
// 			   password: "asdf"
// 			}).then(function(user) {
// 			   console.log("Logged in as: ", user.uid);
// 			}, function(error) {
// 			   console.error("Login failed: ", error);
// 			});

// 			$rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
// 		  		console.log("User " + user.id + " successfully logged in!");
// 			});
// 	}
// ]);