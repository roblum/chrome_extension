'use strict';

/* Services */

angular.module('clipApp.services', [])
  .value('FIREBASE_URL', 'https://clipboard-list.firebaseio.com/')
  .factory('dataService', function($firebase, FIREBASE_URL) {
    var dataRef = new Firebase(FIREBASE_URL);
    var fireData = $firebase(dataRef);

    return fireData;
  })
  .factory('infoService', function(dataService, $firebase, FIREBASE_URL) {

    var infoServiceObject = {
        firstPull : function(){
          return dataService.$asArray();
        },
        directoryPull : function(value){
          var ref = new Firebase(FIREBASE_URL + value)
              ,sync = $firebase(ref); // create an AngularFire reference to the data

              // download the data into a local object
              // console.log(sync.$asArray());
              return sync.$asArray();
        },
      };

    return infoServiceObject;
  })
  .factory('authService', function($firebaseSimpleLogin, $location, $rootScope, FIREBASE_URL) {
    var authRef = new Firebase(FIREBASE_URL);
    var auth = $firebaseSimpleLogin(authRef);

    var authServiceObject = {
        login: function(user, optionalCallback) {
          auth.$login('password', user).then(function(data) {
            // console.log(data);
            // optionalCallback();
            $location.path('/info');
          });
        },
        logout: function() {
          auth.$logout();
          $location.path('/');
        },
        getCurrentUser: function() {
          return auth.$getCurrentUser();
        }
    };

    $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
      $rootScope.currentUser = user;
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
      $rootScope.currentUser = null;
    });

    return authServiceObject;
  });
