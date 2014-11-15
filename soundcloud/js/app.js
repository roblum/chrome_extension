(function(){})();

     var cookieName = 'soundcloud'
          ,$newUserForm = $('.new-user-form')
          ,$mainMenu = $('.main-menu');

     var scClientId = '314d9300b782646cb5bf3e0808f8db20';
     var firebase = new Firebase("https://proserv-soundcloud.firebaseIO.com");

     var general = {
          init : function(){
               userInfo.validateUser();
          }
     };

     var userInfo = {
          validateUser : function(){
               var user = cookies.read();

               console.log('user', user);

               if (!user){
                    $newUserForm.fadeIn();
                    $newUserForm.click(function(){
                         userInfo.initSelf();
                    }); 
               } else {
                    $mainMenu.fadeIn();
                    fireBase.loadRoot();

                    $mainMenu.on('click', '.user-choice', function(){
                         var current = this.id;

                         if (current === 'self'){
                              soundCloud.init(user);               
                         } else if (current === 'friends'){

                         }
                    });
               }
          },
          initSelf : function(){
               var username = $('#self-username').val();
               console.log(username);
               cookies.create(cookieName,  username );
          },
          handleUser : function(user){

               
          }

     };

     var cookies = {
          create : function(name, value){
                    var d = new Date()
                         ,converted = d.getTime() + (999*24*60*60*1000);

                         d.setTime(converted);
                         
                    var expires = "; expires=" + d.toGMTString();

                         document.cookie = name + "=" + value + expires + "; path=/";
          },
          read : function(){
                    if (document.cookie.indexOf(cookieName) !== -1){
                         var cName = cookieName + "=";
                         var ca = document.cookie.split(';');
                         for(var i=0; i<ca.length; i++) {
                              var c = ca[i];
                              while (c.charAt(0)==' ') c = c.substring(1);
                              if (c.indexOf(cName) != -1) return c.substring(cName.length, c.length);
                         }
                    }
                    
                    return false;
          }

     };

     var soundCloud = {
          init : function(user){
               soundCloud.scInit();
               soundCloud.scGet(user);
          },
          scInit : function(){
               SC.initialize({
                    client_id: scClientId 
               });
          },
          scGet : function(user){
               SC.get('/users/' + user + '/playlists', function(tracks){
                    console.log(tracks);
               });
          }
     };


     var fireBase = {
          loadRoot : function(){
               firebase.on('value', function(ss){
                    console.log(ss.val());
                    var allData = ss.val();

                    var users = allData.Users;
                    console.log(users);
               });
          }
     };




firebase.on('child_changed', function(ss){
     console.log('child changed:');
     console.log(ss.val());
     console.log(ss.ref().name());
});

general.init();