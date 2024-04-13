const firebaseConfig = {
    apiKey: "AIzaSyDweTQlUykT4d7Hj6atoDQQPbPa8jkQCzo",
    authDomain: "real-estate-4d415.firebaseapp.com",
    databaseURL: "https://real-estate-4d415-default-rtdb.firebaseio.com",
    projectId: "real-estate-4d415",
    storageBucket: "real-estate-4d415.appspot.com",
    messagingSenderId: "741189993953",
    appId: "1:741189993953:web:e0ce02189fdf13f378fea0",
    measurementId: "G-5X2JS1Q1YX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()
  
// Set up our register function
function register() {
    // Get all our input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
 
  
    // Validate input fields
    if (!validate_email(email)){
        alert('Email is Outta Line!!');
        return;
    }

    if (!validate_password(password)){
        alert('Password is Outta Line!!');
        return;
    }
    

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser;
  
        // Add this user to Firebase Database
        var database_ref = database.ref();
  
        // Create User data
        var user_data = {
            email: email,
            full_name: full_name,
            last_login: Date.now()
        };
  
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data);
  
        // Redirect to homepage
        window.location.href = "homepage.html";
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code;
        var error_message = error.message;
  
        alert(error_message);
    });
}


  
// Set up our login function
function login() {
    // Get all our input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate input fields
    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or Password is Outta Line!!');
        return;
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser;
  
        // Add this user to Firebase Database
        var database_ref = database.ref();
  
        // Create User data
        var user_data = {
            last_login: Date.now()
        };
  
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data);
  
        // Redirect to homepage
        window.location.href = "homepage.html";
  
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code;
        var error_message = error.message;
  
        alert(error_message);
    });
}
  
  
// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}
  
function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    return password.length >= 6;
}
  
function validate_field(field) {
    return field != null && field.length > 0;
}



