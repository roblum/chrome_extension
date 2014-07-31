var kbApp = angular.module('kbApp', []);

kbApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.currentDir = {
		url : 'include.html'
	}

	$scope.navigation = [
		{ name : 'Knowledge Base' , url : 'include.html'}
		,{ name : 'Best Practices', url : 'include2.html' }
	];

	$scope.togglePortal = function(){
		$scope.currentDir.url = 'main.html';
		console.log('ran')
	}

}]);