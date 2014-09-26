var bugApp = angular.module('bugApp', ['ngAnimate', 'firebase']);

bugApp.controller('loginDirectory', ["$scope", "$firebaseSimpleLogin", function($scope, $firebaseSimpleLogin){

     var dataRef = new Firebase("https://bug-tracker.firebaseio.com/");
     $scope.loginObj = $firebaseSimpleLogin(dataRef);


     $scope.loginObj.$getCurrentUser()
          .then(function(data){
               // Returns true if user is logged in
               console.log("data");
               console.log(data);
               $scope.authFlag = data !== null;
          }, function(){
               console.log('no data');
               $scope.authFlag = false;
          });

     $scope.checkCredentials = function(user){
          console.log('running credentials');
          $scope.loginObj.$login("password", {
               email: user.name,
               password: user.pass
          }).then(function(user) {
               console.log("Logged in as: ", user.uid);
               console.log("Logged in as: ", user.id);
               console.log($firebaseSimpleLogin)
          }, function(error) {
               console.error("Login failed: ", error);
          });

     }

     $scope.logout = function(){
          $scope.loginObj.$logout();
          $scope.authFlag = false;
     };


}]);

bugApp.controller('contentDirectory', ["$scope", "$firebaseSimpleLogin", function($scope, $firebaseSimpleLogin, $rootScope){

     // $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
     //      console.log('contentDirectory Controller');
     //      console.log("User " + user.id + " successfully logged in!");
     // });

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

}]);
