// ====================================================================
// ********************* FIREBASE LOGIN ********************* //

// (function(){ // keep all variables public for testing

// var error = document.getElementById('error-message')
//     ,loginContainer = document.getElementById('login-container')
//     ,loginButtonContainer = document.getElementById('login-button-container')
//     ,user = document.getElementById('username')
//     ,pass = document.getElementById('password')
//     ,loginButton = document.getElementsByClassName('login-button')
//     ,copyListContainer = document.getElementById('copy-list-container')
//     ,loginInput = document.querySelectorAll('#login-container input')
//     ,myRef = new Firebase("https://clipboard-list.firebaseio.com");


// for (var i=0; i<loginButton.length; i++){
//   loginButton[i].onclick = function(){
//     var username = user.value
//       ,password = pass.value
//       ,that = this.id;

//       if (that === 'login-submit') login(username, password);
//       else if (that === 'register-submit') register(username, password);
//       else if (that === 'logout') authClient.logout();

//   }
// }


// var authClient = new FirebaseSimpleLogin(myRef, function(error, user){
//   console.log('user');
//   console.log(user);
//   if (error) {
//     // an error occurred while attempting login
//     console.log(error);

//     displayError(error);
//   } else if (user) {
//     // user authenticated with Firebase
//     console.log("User ID: " + user.uid + ", Provider: " + user.provider);
    
//     loginContainer.style.display = 'none';
//     copyListContainer.style.display = 'block';
    
//     loginInput[0].value = '';
//     loginInput[1].value = '';
//     authentication();
//     // if( isNewUser ) {
//     //   // save new user's profile into Firebase so we can
//     //   // list users, use them in security rules, and show profiles
//     //   myRef.child('users').child(user.uid).set({
//     //     displayName: user.displayName,
//     //     provider: user.provider,
//     //     provider_id: user.id
//     //   });
//     // }
//   } else {
//     loginContainer.style.display = 'block';
//     loginButtonContainer.style.display = 'block';
//     copyListContainer.style.display = 'none';
//     console.log('user is logged out');
//     // user is logged out
//   }
// });

// function authentication(){
//   var authRef = new Firebase("https://clipboard-list.firebaseio.com/.info/authenticated");
//        authRef.on("value", function(snap) {
//           if (snap.val() === true) {
//             console.log("authenticated");
//             pullData();
//           } else {
            
//             console.log("not authenticated");
//           }
//       });
// }


// function register(username, password) {
//     authClient.createUser(username, password, function (error, user) {
//        if (!error) {
//             login();
//        } else {
//             displayError(error);
//        }
//     });
// }


// function login(username, password){
//       authClient.login('password', {
//       email: username,
//       password: password,
//       rememberMe: true
//     });

//     authentication();
// }

// // compares against error codes to display errors
//   function displayError(err) {
//     var errorMsg = '';
//     switch (err.code) {
//     case "INVALID_EMAIL":
//       errorMsg = "You entered an invalid email";
//       break;
//     case "INVALID_PASSWORD":
//       errorMsg = "You entered an invalid password";
//       break;
//         case "EMAIL_TAKEN":
//              errorMsg = "The email you entered has been taken.";   
//              break;
//     default:
//       errorMsg = "We're not really sure what happened.";
//       break;
//     }
//         error.innerHTML = errorMsg;
//         error.style.display = 'block';
//   }

// function pullData(){
//   console.log('pullData() ran');
//     myRef.on('value', function(ss){
//        console.log('these are all the values');
//        console.log(ss.val());
//        var allData = ss.val();
//     });

//     myRef.on('child_changed', function(ss){
//        console.log('child changed:');
//        console.log(ss.val());
//     });
// }


// })();