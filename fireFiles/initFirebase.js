const firebase = require("firebase/app");

const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAxCwtWGW4YLIgFBRHBdsTACrgbhjQm5o0",
  authDomain: "comptuerclubofarniko.firebaseapp.com",
  projectId: "comptuerclubofarniko",
  storageBucket: "comptuerclubofarniko.appspot.com",
  messagingSenderId: "137356701106",
  appId: "1:137356701106:web:88230a264ec1429a4b88ab",
  measurementId: "G-YX62GP0SG1",
};

firebase.initializeApp(firebaseConfig);

module.exports = {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
};
