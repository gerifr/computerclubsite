import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyAxCwtWGW4YLIgFBRHBdsTACrgbhjQm5o0",
    authDomain: "comptuerclubofarniko.firebaseapp.com",
    projectId: "comptuerclubofarniko",
    storageBucket: "comptuerclubofarniko.appspot.com",
    messagingSenderId: "137356701106",
    appId: "1:137356701106:web:88230a264ec1429a4b88ab",
    measurementId: "G-YX62GP0SG1"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();
  const homedisplay=document.getElementById('loghome');
  onAuthStateChanged(auth, (user)=>{
    if(user.emailVerified){
        const loggedInUserId=localStorage.getItem('loggedInUserId');
        if(loggedInUserId){
            console.log(user);
            const docRef = doc(db, "users", loggedInUserId);
            getDoc(docRef)
            .then((docSnap)=>{
                if(docSnap.exists()){
                    const userData=docSnap.data();
                    document.getElementById('loggedUserFName').innerText=userData.firstName;
                    document.getElementById('loggedUserEmail').innerText=userData.email;
                    document.getElementById('loggedUserLName').innerText=userData.lastName;
                    homedisplay.style.display="block";
                }
                else{
                    console.log("no document found matching id")
                }
            })
            .catch((error)=>{
                console.log("Error getting document");
            })
        }
        else{
            console.log("User Id not Found in Local storage")
        }
    }
    else{
        alert("Email isn't verified, you won't be given data mate");
        window.location.href='index.html';
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })
