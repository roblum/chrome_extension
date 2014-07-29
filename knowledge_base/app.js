var kbApp = angular.module('kb-app', []);

kbApp.controller('mainDirectory', function($scope){
	$scope.items = {
		'knowledge base' : 'knowledge base value'
		,'best practices' : 'best practices value'
	}
});