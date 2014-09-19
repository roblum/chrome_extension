window.onload = function(){

	copyHover();
	// attachCopy();

}

	function copyHover(){

		$('.snippet-container').mouseenter(function(){
			console.log('fired');
			$(this).find('.copy-button').fadeIn();
		}).mouseleave(function(){
			$(this).find('.copy-button').fadeOut();
		});

	}


// ====================================================================
// ********************* FIREBASE LOGIN ********************* //
// we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean
// var isNewUser = true;

var myRef = new Firebase("https://clipboard-list.firebaseio.com");
var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
  console.log('user');
  console.log(user);
  if (error) {
    // an error occurred while attempting login
    console.log('error');
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
    $('#login-container').hide();
    $('#copy-list-container').show();
    // if( isNewUser ) {
    //   // save new user's profile into Firebase so we can
    //   // list users, use them in security rules, and show profiles
    //   myRef.child('users').child(user.uid).set({
    //     displayName: user.displayName,
    //     provider: user.provider,
    //     provider_id: user.id
    //   });
    // }
  } else {
    $('#login-button-container').show();
    console.log('user is logged out');
    // user is logged out
  }
});

function authentication(){
var authRef = new Firebase("https://clipboard-list.firebaseio.com/.info/authenticated");
     authRef.on("value", function(snap) {
  if (snap.val() === true) {
    alert("authenticated");
  } else {
    alert("not authenticated");
  }
});
   }

$('body').on('click', '#login-submit',function(){
  var username = $('#username').val()
    ,password = $('#password').val();

  // register(username, password);
  login(username, password);

});

     function register(username, password) {

          authClient.createUser(username, password, function (error, user) {
            // if there isn't an error, log the user in
            // then switch to the userInfo view
               if (!error) {
                    login();
                switchView('userInfo');
               } else {
                // display any errors
                    displayError(error);
               }
          });

     }


function login(username, password){
    authClient.login('password', {
    email: username,
    password: password,
    rememberMe: true
    });

    // authentication();
}