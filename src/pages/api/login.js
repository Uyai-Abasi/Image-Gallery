const auth = firebase.auth();

// Sign up a new user with email and password
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed up successfully
    const user = userCredential.user;
  })
  .catch((error) => {
throw error  });
