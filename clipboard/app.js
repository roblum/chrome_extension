var clipApp = angular.module('clipApp', []);

clipApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.snippets = [
		{
			"one" : "one"
		},{
			"eno" : "eno"
		}
	];

}]);