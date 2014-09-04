var libApp = angular.module('libApp', []);

libApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.navigation = [
		{ 
			name : 'jQuery' 
			,url : '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>' 
		}
		,{ 
			name : 'Angularjs' 
			,url : '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>' 
		}
	];

	// $scope.jQuery = [
	// 	2.1.1, 2.1.0, 2.0.3, 2.0.2, 2.0.1, 2.0.0, 1.11.1, 1.11.0, 1.10.2, 1.10.1, 1.10.0, 1.9.1, 1.9.0, 1.8.3, 1.8.2, 1.8.1, 1.8.0, 1.7.2, 1.7.1, 1.7.0, 1.6.4, 1.6.3, 1.6.2, 1.6.1, 1.6.0, 1.5.2, 1.5.1, 1.5.0, 1.4.4, 1.4.3, 1.4.2, 1.4.1, 1.4.0, 1.3.2, 1.3.1, 1.3.0, 1.2.6, 1.2.3
	// ]

	$scope.pre = '<script src="https://ajax.googleapis.com/ajax/libs/';
	$scope.closing = '.min.js"></script>';

}]);