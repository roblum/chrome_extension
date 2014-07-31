var kbApp = angular.module('kbApp', []);

kbApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.navigation = [
		{ name : 'Knowledge Base' , url : 'include.html' }
		,{ name : 'Best Practices' , url : 'include2.html' }
	];

}]);


kbApp.controller('cssCompiler', ['$scope',function($scope){

	$scope.cssList = [
		{ name : 'Background' , content : 'background' }
		, { name : 'Text Color' , content : 'color' }
		, { name : 'Border Radius' , content : 'border-radius' }
		, { name : 'Font' , content : 'font-family' }
		, { name : 'Font Size' , content : 'font-size' }
	];

}]);
	