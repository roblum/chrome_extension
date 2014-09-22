var clipApp = angular.module('clipApp', ['ngAnimate', 'firebase']);

clipApp.controller('mainDirectory', function($scope, $firebase){

    var ref = new Firebase("https://clipboard-list.firebaseio.com/snippets");

    // create an AngularFire reference to the data
    var sync = $firebase(ref);

    // download the data into a local object
    $scope.snippets = sync.$asArray();

    $scope.addSnippet = function(text){
    	console.log('snippet ran');
    	$scope.snippets.$add({text: text});
    }

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


// clipApp.controller("MyAuthCtrl", ["$scope", "$firebaseSimpleLogin",
	
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