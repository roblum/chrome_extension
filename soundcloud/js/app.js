(function(){})();

var cookies = {
     create : function(name, value, days){
          if (days){
               var date = new Date();
               date.setTime(date.getTime()+(days*24*60*60*1000));
               var expires = "; expires="+date.toGMTString();
          } else {
               var expires = "";
               document.cookie = name+"="+value+expires+"; path=/";
          }
     },
     read : function(){
          if(document.cookie.indexOf('soundcloud') == -1) {
               // cookie doesn't exist, create it now
               console.log(document.cookie);
               document.cookie = 'soundcloud=1';
          }
          else {
               // not first visit, so alert
               console.log('else', document.cookie);
               alert('You refreshed!');
          }
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
}

cookies.create('doRedirect','true','999');
cookies.read();
soundCloud.init();

var firebase = new Firebase("https://proserv-soundcloud.firebaseIO.com");

firebase.on('value', function(ss){
     console.log(ss.val());
     var allData = ss.val();
});

firebase.on('child_changed', function(ss){
     console.log('child changed:');
     console.log(ss.val());
     console.log(ss.ref().name());
});

