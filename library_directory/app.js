var libApp = angular.module('libApp', []);

libApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.navigation = [
		{
			name : 'jquery'
			,pre : '<script src="https://ajax.googleapis.com/ajax/libs/jquery/'
			,close : '/jquery.min.js"></script>'
		}
		,{
			name : 'angularjs'
			,pre : '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/'
			,close : '/angular.min.js"></script>'
		},{
			name : 'requests'
			,pre : 'https://offerpop.wufoo.com/forms/offerpop-request-form/'
		}
	];

	$scope.jquery = [
		'2.1.1', '1.11.0', '1.6.4', '1.4.2'
	]

	// $scope.jquery = [
	// 	'2.1.1', '2.1.0', '2.0.3', '2.0.2', '2.0.1', '2.0.0', '1.11.1', '1.11.0', '1.10.2', '1.10.1', '1.10.0', '1.9.1', '1.9.0', '1.8.3', '1.8.2', '1.8.1', '1.8.0', '1.7.2', '1.7.1', '1.7.0', '1.6.4', '1.6.3', '1.6.2', '1.6.1', '1.6.0', '1.5.2', '1.5.1', '1.5.0', '1.4.4', '1.4.3', '1.4.2', '1.4.1', '1.4.0', '1.3.2', '1.3.1', '1.3.0', '1.2.6', '1.2.3'
	// ]

	$scope.angular = [
		"1.2.23", "1.2.22", "1.2.21", "1.2.20", "1.2.19", "1.2.18", "1.2.17", "1.2.16", "1.2.15", "1.2.14", "1.2.13", "1.2.12", "1.2.11", "1.2.10", "1.2.9", "1.2.8", "1.2.7", "1.2.6", "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1", "1.2.0", "1.0.8", "1.0.7", "1.0.6", "1.0.5", "1.0.4", "1.0.3", "1.0.2", "1.0.1"
	]

	$scope.jqueryBool = false;
	$scope.angularBool = false;

	$scope.$watch("currentDir", function(value){
			console.log(value)
			if (value.name === 'jquery'){
				$scope.jqueryBool = true;
				$scope.angularBool = false;
			} else if (value.name === 'angularjs'){
				$scope.angularBool = true;
				$scope.jqueryBool = false;
			}
		}
	);

}]);