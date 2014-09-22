var clipApp = angular.module('clipApp', ['ngAnimate']);

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

	$scope.hover = false;

	$scope.show = function(){
		this.hover = true;
	}

	$scope.hide = function(){
		this.hover = false;
	}

}]);