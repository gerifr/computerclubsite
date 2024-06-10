import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const _0x14667c=_0x38cd;(function(_0x77d385,_0x4cb3fd){const _0x5822bb=_0x38cd,_0x49b0b0=_0x77d385();while(!![]){try{const _0x20c056=parseInt(_0x5822bb(0x187))/0x1+parseInt(_0x5822bb(0x17d))/0x2*(-parseInt(_0x5822bb(0x180))/0x3)+-parseInt(_0x5822bb(0x18c))/0x4*(parseInt(_0x5822bb(0x18a))/0x5)+parseInt(_0x5822bb(0x188))/0x6*(-parseInt(_0x5822bb(0x182))/0x7)+-parseInt(_0x5822bb(0x17e))/0x8+-parseInt(_0x5822bb(0x183))/0x9+parseInt(_0x5822bb(0x184))/0xa;if(_0x20c056===_0x4cb3fd)break;else _0x49b0b0['push'](_0x49b0b0['shift']());}catch(_0xf30257){_0x49b0b0['push'](_0x49b0b0['shift']());}}}(_0x2526,0xb669f));const firebaseConfig={'apiKey':_0x14667c(0x18b),'authDomain':_0x14667c(0x181),'projectId':_0x14667c(0x17f),'storageBucket':_0x14667c(0x185),'messagingSenderId':_0x14667c(0x189),'appId':_0x14667c(0x186),'measurementId':'G-YX62GP0SG1'};function _0x38cd(_0x9102e1,_0x1ff89b){const _0x252625=_0x2526();return _0x38cd=function(_0x38cdaf,_0x22e48e){_0x38cdaf=_0x38cdaf-0x17d;let _0xc6a62a=_0x252625[_0x38cdaf];return _0xc6a62a;},_0x38cd(_0x9102e1,_0x1ff89b);}function _0x2526(){const _0x5ac75e=['128165uklqHf','AIzaSyAxCwtWGW4YLIgFBRHBdsTACrgbhjQm5o0','164aqKIOG','4vTAYsl','9051016HWbrDX','comptuerclubofarniko','939093bLrFyA','comptuerclubofarniko.firebaseapp.com','5642IBBtLr','288711syMTIF','32736710xAubHo','comptuerclubofarniko.appspot.com','1:137356701106:web:88230a264ec1429a4b88ab','781447vQmjOG','3480SdAyTS','137356701106'];_0x2526=function(){return _0x5ac75e;};return _0x2526();}

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
