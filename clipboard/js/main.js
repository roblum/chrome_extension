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

var $error = $('#error-message')
    ,$user = $('#username')
    ,$pass = $('#password')
    ,myRef = new Firebase("https://clipboard-list.firebaseio.com");

var authClient = new FirebaseSimpleLogin(myRef, function(error, user){
  console.log('user');
  console.log(user);
  if (error) {
    // an error occurred while attempting login
    console.log('error');
    console.log(error);
    displayError(error);
      // if (error.code)
  } else if (user) {
    // user authenticated with Firebase
    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
    $('#login-container').hide();
    $('#copy-list-container').show();
    $('#login-container input').val('');
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
    $('#login-container, #login-button-container').show();
    $('#copy-list-container').hide();
    console.log('user is logged out');
    // user is logged out
  }
});

function authentication(){
var authRef = new Firebase("https://clipboard-list.firebaseio.com/.info/authenticated");
     authRef.on("value", function(snap) {
        if (snap.val() === true) {
          console.log("authenticated");
          pullData();
        } else {
          
          console.log("not authenticated");
        }
    });
  }


 function register(username, password) {
    authClient.createUser(username, password, function (error, user) {
       if (!error) {
            login();
       } else {
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

    authentication();
}

// compares against error codes to display errors
  function displayError(error) {
    var errorMsg = '';
    switch (error.code) {
    case "INVALID_EMAIL":
      errorMsg = "You entered an invalid email";
      break;
    case "INVALID_PASSWORD":
      errorMsg = "You entered an invalid password";
      break;
        case "EMAIL_TAKEN":
             errorMsg = "The email you entered has been taken.";   
             break;
    default:
      errorMsg = "We're not really sure what happened.";
      break;
    }
        $error.text(errorMsg);
        $error.stop().show().fadeOut(4000);
  }

function pullData(){
  console.log('pullData() ran');
    myRef.on('value', function(ss){
       console.log('these are all the values');
       console.log(ss.val());
       var allData = ss.val();
    });

    myRef.on('child_changed', function(ss){
       console.log('child changed:');
       console.log(ss.val());
    });
}

$('body').on('click', '.login-button',function(){
  var username = $user.val()
    ,password = $pass.val()
    ,that = this.id;

    if (that === 'login-submit') login(username, password);
    else if (that === 'register-submit') register(username, password);
    else if (that === 'logout') authClient.logout();

});
