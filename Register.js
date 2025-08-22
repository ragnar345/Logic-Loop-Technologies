document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  try {
    const userCred = await auth.createUserWithEmailAndPassword(email, password);
    // Store user info in Firestore
    await db.collection('users').doc(userCred.user.uid).set({
      name,
      email
    });
    alert("Registration successful!");
    // Optionally redirect
  } catch (e) {
    alert(e.message);
  }
});

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
