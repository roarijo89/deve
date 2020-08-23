const loggedOutElements = document.querySelectorAll('.logged-out');
const loggedInElements = document.querySelectorAll('.logged-in');

const loginCheck = user => {
  console.log('5 user', !!user);
  if (user) {
    loggedOutElements.forEach(element => element.style.display = 'block');
    loggedInElements.forEach(element => element.style.display = 'none');
  } else {
    loggedOutElements.forEach(element => element.style.display = 'none');
    loggedInElements.forEach(element => element.style.display = 'block');
  }
}
// SignUp
const singupForm = document.querySelector('#signup-form');

singupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;

  auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredenntial => {
        singupForm.reset();

        $('#signupModal').modal('hide');

        console.log('singUp', userCredenntial);
      });
  console.log(email, password);
});

// SignIn
const singinForm = document.querySelector('#login-form');

singinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  auth
  .signInWithEmailAndPassword(email, password)
  .then(userCredenntial => {
    singinForm.reset();

    $('#signinModal').modal('hide');

    console.log('signIn', userCredenntial);
  });  
});

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
     console.log('signOut');
  });
});

// Post
const postList = document.querySelector('.posts');

const setupPosts = data => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const post = doc.data();
      console.log('58 post', post);
      const li = `
        <li class="list-group-item list-group-item-action">
          <h5>${post.title}</h5>
          <p>${post.description}</p>
        </li>
      `
      html += li;
    });

    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<p class="text-center">Login to see posts</p>'
  }
}

// Google Login
const googleButton = document.querySelector('#googleLogin');
googleButton.addEventListener('click', e => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      singinForm.reset();
      $('#signinModal').modal('hide');
      console.log('Google singIn ',result);
    })
      .catch(err => {
        console.log('Error', err);
      });
  console.log('Google Click');
});

// Facebook Login
const facebookButton = document.querySelector('#facebookLogin');
facebookButton.addEventListener('click', e => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      singinForm.reset();
      $('#signinModal').modal('hide');
      console.log('Facebook singIn');
    })
      .catch(err => {
        console.log('Error', err);
      });
});


// Events
auth.onAuthStateChanged(user => {
  if (user) {
    fs.collection('posts')
      .get()
      .then((snapshots) =>{
        setupPosts(snapshots.docs);
        loginCheck(user);
      });
    console.log('sign In');
  } else {
    setupPosts([]);
    loginCheck(user);
    console.log('sign Out');
  }
});