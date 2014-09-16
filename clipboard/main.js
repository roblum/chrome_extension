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

var myRef = new Firebase("https://clipboard-list.firebaseio.com");
var auth = new FirebaseSimpleLogin(myRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
  } else {
    // user is logged out
  }
});

auth.createUser('inferno.sheep@gmail.com', 'test', function(error, user) {
  if (error === null) {
    console.log("User created successfully:", user);
  } else {
    console.log("Error creating user:", error);
  }
});

    auth.login('password', {
    email: '<email@domain.com>',
    password: '<password>',
    rememberMe: true
    });

	// function attachCopy(){

	// 	$('body').on('click', '.copy-button', function(){
	// 		var current = this.id.match(/\d+/g)[0];
	// 		console.log(current);

	// 	    var area = document.querySelector('#snippet-container-' + current + ' input');
	// 	    area.focus();
	// 	    document.execCommand('SelectAll');
	// 	    document.execCommand("Copy", false, null);
	// 	});

	// }