var clipApp = angular.module('clipApp', []);

clipApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.snippets = [
		{
			"one" : "one"
		},{
			"eno" : "eno"
		}
	];

	$scope.button = function($index){
		var current = $index
	    	,area = document.querySelector('#snippet-container-' + current + ' input');

		    area.focus();
		    document.execCommand('SelectAll');
		    document.execCommand("Copy", false, null);
	}

}]);