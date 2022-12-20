import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAF5gxyfpiDM3RIeI2k59ZokJvwJ14NOA",
  authDomain: "bad-fashion.firebaseapp.com",
  projectId: "bad-fashion",
  storageBucket: "bad-fashion.appspot.com",
  messagingSenderId: "358431069004",
  appId: "1:358431069004:web:53782e9d6276bc6ac3f5e9",
  measurementId: "G-5P88BTPB4K"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});

const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  export {
    firestore,
    signInWithGoogle,
    auth
  };
  export default app;