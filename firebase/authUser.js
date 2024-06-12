// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const _0x14667c = _0x38cd;
(function (_0x77d385, _0x4cb3fd) {
  const _0x5822bb = _0x38cd,
    _0x49b0b0 = _0x77d385();
  while (!![]) {
    try {
      const _0x20c056 =
        parseInt(_0x5822bb(0x187)) / 0x1 +
        (parseInt(_0x5822bb(0x17d)) / 0x2) *
          (-parseInt(_0x5822bb(0x180)) / 0x3) +
        (-parseInt(_0x5822bb(0x18c)) / 0x4) *
          (parseInt(_0x5822bb(0x18a)) / 0x5) +
        (parseInt(_0x5822bb(0x188)) / 0x6) *
          (-parseInt(_0x5822bb(0x182)) / 0x7) +
        -parseInt(_0x5822bb(0x17e)) / 0x8 +
        -parseInt(_0x5822bb(0x183)) / 0x9 +
        parseInt(_0x5822bb(0x184)) / 0xa;
      if (_0x20c056 === _0x4cb3fd) break;
      else _0x49b0b0["push"](_0x49b0b0["shift"]());
    } catch (_0xf30257) {
      _0x49b0b0["push"](_0x49b0b0["shift"]());
    }
  }
})(_0x2526, 0xb669f);
const firebaseConfig = {
  apiKey: _0x14667c(0x18b),
  authDomain: _0x14667c(0x181),
  projectId: _0x14667c(0x17f),
  storageBucket: _0x14667c(0x185),
  messagingSenderId: _0x14667c(0x189),
  appId: _0x14667c(0x186),
  measurementId: "G-YX62GP0SG1",
};
function _0x38cd(_0x9102e1, _0x1ff89b) {
  const _0x252625 = _0x2526();
  return (
    (_0x38cd = function (_0x38cdaf, _0x22e48e) {
      _0x38cdaf = _0x38cdaf - 0x17d;
      let _0xc6a62a = _0x252625[_0x38cdaf];
      return _0xc6a62a;
    }),
    _0x38cd(_0x9102e1, _0x1ff89b)
  );
}
function _0x2526() {
  const _0x5ac75e = [
    "128165uklqHf",
    "AIzaSyAxCwtWGW4YLIgFBRHBdsTACrgbhjQm5o0",
    "164aqKIOG",
    "4vTAYsl",
    "9051016HWbrDX",
    "comptuerclubofarniko",
    "939093bLrFyA",
    "comptuerclubofarniko.firebaseapp.com",
    "5642IBBtLr",
    "288711syMTIF",
    "32736710xAubHo",
    "comptuerclubofarniko.appspot.com",
    "1:137356701106:web:88230a264ec1429a4b88ab",
    "781447vQmjOG",
    "3480SdAyTS",
    "137356701106",
  ];
  _0x2526 = function () {
    return _0x5ac75e;
  };
  return _0x2526();
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//message js
function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}
// Sin up js stuff
const signUp = document.getElementById("submitSignUp");
signUp.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;
  const pwlength = password.length;

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
      };
      showMessage("Account Created Successfully", "signUpMessage");

      const auth = getAuth();
      sendEmailVerification(auth.currentUser).then(() => {
        alert("Verification sent");
      });

      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/email-already-in-use") {
        showMessage("Email Address Already Exists !!!", "signUpMessage");
      } else if (pwlength < 6) {
        alert("Password is too short,please make it 6 chars or more");
      } else {
        showMessage(
          "unable to create User, Please make sure your password lenght is over 6 chars",
          "signUpMessage"
        );
      }
    });
});

const signIn = document.getElementById("submitSignIn");
signIn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("login is successful", "signInMessage");
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "loghome.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signInMessage");
      } else {
        showMessage("Account does not Exist", "signInMessage");
      }
    });
});
