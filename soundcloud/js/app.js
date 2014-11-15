(function(){})();

     var cookieName = 'soundcloud'

     var general = {
          init : function(){
               userInfo.checkNewUser();
          }
     }

     var userInfo = {
          checkNewUser : function(){
               var user = cookies.read();

               console.log('user', user);

               if (!user){
                    var $newUserForm = $('.new-user-form');

                    $newUserForm.show();
                    $newUserForm.click(function(){
                         userInfo.initSelf();
                    }); 
               } else {
                    soundCloud.init();

                    $('.main-menu').fadeIn();
               }
          },
          initSelf : function(){
               var username = $('#self-username').val();
                    console.log(username);
               cookies.create(cookieName,  username );
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
          init : function(){
               soundCloud.scInit();
               soundCloud.scGet('infernosheep');
          },
          scInit : function(){
               SC.initialize({
                    client_id: "314d9300b782646cb5bf3e0808f8db20"
               });
          },
          scGet : function(user){
               SC.get('/users/' + user + '/playlists', function(tracks){
                    console.log(tracks);
               });
          }
     };

// soundCloud.init();

// var firebase = new Firebase("https://proserv-soundcloud.firebaseIO.com");

// firebase.on('value', function(ss){
//      console.log(ss.val());
//      var allData = ss.val();
// });

// firebase.on('child_changed', function(ss){
//      console.log('child changed:');
//      console.log(ss.val());
//      console.log(ss.ref().name());
// });

general.init();