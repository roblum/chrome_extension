(function(){})();

var general = {
     init : function(){
          userInfo.checkNewUser();
     }
}

var userInfo = {
     checkNewUser : function(){
          cookies.read();
     },
     self : function(){
          cookies.create('soundcloud','');
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
               var index = document.cookie.indexOf('soundcloud');
          console.log(document.cookie.slice(index, document.cookie.length));

          // if(document.cookie.indexOf('soundcloud') == -1) {
          //      // cookie doesn't exist, create it now
          //      console.log(document.cookie);
          //      // document.cookie = 'soundcloud=1';
          // }
          // else {
          //      // Return user
          //      console.log('return user', document.cookie);
          //      // console.log(document.cookie)
          // }
     }

};

cookies.read();

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

