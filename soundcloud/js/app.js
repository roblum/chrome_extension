
SC.initialize({
     client_id: "314d9300b782646cb5bf3e0808f8db20"
});

SC.get("/me", function(tracks){
     console.log(tracks);
});

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

