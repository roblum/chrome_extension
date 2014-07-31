var kbApp = angular.module('kbApp', []);

kbApp.controller('mainDirectory', ['$scope', function($scope){

	$scope.navigation = [
		{ name : 'Knowledge Base' , url : 'cssGenerator.html' }
		,{ name : 'Best Practices' , url : 'include2.html' }
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
	