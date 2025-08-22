window.addEventListener('DOMContentLoaded', function () {
  function arrangeInputs() {
    const container = document.querySelector('.login-container');
    const email = container.querySelector('input[type="email"]');
    const password = container.querySelector('input[type="password"]');

    // Remove wrapper if it exists
    let wrapper = container.querySelector('.inputs-row');
    if (wrapper) {
      container.insertBefore(email, wrapper);
      container.insertBefore(password, wrapper);
      wrapper.remove();
    }

    if (window.innerWidth >= 600) {
      // Create a wrapper div for side-by-side layout
      wrapper = document.createElement('div');
      wrapper.className = 'inputs-row';
      wrapper.style.display = 'flex';
      wrapper.style.gap = '16px';
      wrapper.style.width = '100%';

      email.style.width = '100%';
      password.style.width = '100%';

      wrapper.appendChild(email);
      wrapper.appendChild(password);

      // Insert wrapper after h2
      const h2 = container.querySelector('h2');
      container.insertBefore(wrapper, h2.nextSibling);
    } else {
      // Stack inputs vertically
      email.style.width = '';
      password.style.width = '';
    }
  }

  arrangeInputs();
  window.addEventListener('resize', arrangeInputs);
});


document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
    // Optional: close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('show'));
    });
  }
});

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert("Login successful!");
    // Optionally redirect
  } catch (e) {
    alert(e.message);
  }
});

document.getElementById('googleAuthBtn').onclick = async function() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    // Store user info in Firestore if new
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      await db.collection('users').doc(user.uid).set({
        name: user.displayName,
        email: user.email
      });
    }
    alert("Google sign-in successful!");
    // Optionally redirect
  } catch (e) {
    alert(e.message);
  }
};

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCl5agx_kByea7T24aT5osG1m6rt5SXyjg",
  authDomain: "logic-loop-website-fd847.firebaseapp.com",
  projectId: "logic-loop-website-fd847",
  // ...other config...
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
