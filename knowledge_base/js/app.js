var kbApp = angular.module('kbApp', []);

kbApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.navigation = [
		{ name : 'Knowledge Base' , url : 'cssGenerator.html' }
		,{ name : 'Best Practices' , url : 'include2.html' }
		,{ name : 'Libraries' , url : 'library.html' }
	];

}]);


kbApp.controller('cssCompiler', ['$scope',function($scope){

	$scope.cssList = [
		{name : 'Background'
			,content : 'background:'
			,px : false
		}
		,{name : 'Text Color'
			,content : 'color:'
			,px : false
			}
		,{name : 'Border Radius'
			,content : 'border-radius:'
			,px : true
		}
		,{name : 'Font'
			,content : 'font-family:'
			,px : false
		}
		,{name : 'Font Size'
			,content : 'font-size:'
			,px : true
		}
		,{name : 'Width'
			,content : 'width:'
			,px : true
		}
		,{name : 'Height'
			,content : 'height:'
			,px : true
		}
	];

}]);

kbApp.controller('libraryCtrl', ['$scope',function($scope){

	$scope.library = {
			'jQuery' : '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>'
			,'angular' : '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular.min.js"></script>'
	}

}]);