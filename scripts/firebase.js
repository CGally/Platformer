var currentUser = document.getElementById("currentUser"),
    signUpModalBtn = document.getElementById("signUpModalBtn"),
    signUpModal = document.getElementById("signUpModal"),
    loginModalBtn = document.getElementById("loginModalBtn"),
    loginModal = document.getElementById("loginModal"),
    modal = document.getElementById("modal"),
    signUpBtn = document.getElementById("signUpBtn"),
    signUpEmail = document.getElementById("signUpEmail"),
    signUpPassword = document.getElementById("signUpPassword"),
    loginBtn = document.getElementById("loginBtn"),
    loginEmail = document.getElementById("loginEmail"),
    loginPassword = document.getElementById("loginPassword"),
    loginError = document.getElementById("loginError"),
    signOutBtn = document.getElementById("signOutBtn");
    cancelBtn = document.getElementsByClassName("cancelBtn");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    signUpModalBtn.style.display = 'none';
    loginModalBtn.style.display = 'none';
    signUpModal.style.display = 'none';
    loginModal.style.display = 'none';
    modal.style.display = 'none';
    signOutBtn.style.display = 'inline-block';
    currentUser.textContent = 'Signed In';
  } else {
    signOutBtn.style.display = 'none';
    currentUser.textContent = '';
  }
});

signUpModalBtn.addEventListener('click', function() {
  loginModal.style.display = 'none';
  modal.style.display = 'block';
  signUpModal.style.display = 'block';
});

loginModalBtn.addEventListener('click', function() {
  signUpModal.style.display = 'none';
  modal.style.display = 'block';
  loginModal.style.display = 'block';
});

signUpBtn.addEventListener('click', function() {
  var email = signUpEmail.value;
  user = signUpEmail.value;
  var password = signUpPassword.value;
  if( email !== '' && password !== '' ) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      signUpError.textContent = error.message;
    });
  }
});

loginBtn.addEventListener('click', function() {
  var email = loginEmail.value;
  var password = loginPassword.value;
  if( email !== '' && password !== '' ) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      loginError.textContent = error.message;
    })
  }
});

cancelBtn[0].addEventListener('click', function() {
  signUpModal.style.display = 'none';
  loginModal.style.display = 'none';
  modal.style.display = 'none';
});

cancelBtn[1].addEventListener('click', function() {
  signUpModal.style.display = 'none';
  loginModal.style.display = 'none';
  modal.style.display = 'none';
});

signOutBtn.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
    signUpModalBtn.style.display = 'inline-block';
    loginModalBtn.style.display = 'inline-block';
  }, function(error) {
    signOutError.textContent = error.message;
  });
});