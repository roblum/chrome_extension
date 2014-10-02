var clipApp = angular.module('clipApp', ['ngAnimate', 'firebase']);

clipApp.controller('mainDirectory', function($scope, $firebase){

    $scope.navigation = [
        {
            name : 'Bitly-Links'
        },
        {
            name : 'snippets'
        }
    ]

    $scope.$watch('currentDir', function(value){
        if (value){
            var ref = new Firebase("https://clipboard-list.firebaseio.com/" + value.name);

            // create an AngularFire reference to the data
            var sync = $firebase(ref);

            // download the data into a local object
            $scope.snippets = sync.$asArray();
        }
    });

		    $scope.addSnippet = function(text){
			    	console.log('snippet ran');
			    	$scope.snippets.$add({text: text});
			    	document.querySelector('form input').value = '';
		    }

	$scope.edit = function($index){
		var current = document.querySelector('#snippet-container-' + $index + ' input');
		current.removeAttribute('disabled');
	}

	$scope.button = function($index){
		var current = $index
	    	,area = document.querySelector('#snippet-container-' + current + ' input');

	    		area.removeAttribute('disabled');
		    	area.focus();
		    	document.execCommand('SelectAll');
		    	document.execCommand("Copy", false, null);
		    	area.setAttribute('disabled', 'disabled');
	}

	$scope.hover = false;

	$scope.show = function(){
		this.hover = true;
	}

	$scope.hide = function(){
		this.hover = false;
	}

});

