import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signInWithEmailAndPassword
} from "firebase/auth";

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
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});

const signInWithGoogle = () => signInWithPopup(auth, provider);

const createUserProfileDocument = async (userAuth, ...additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);
   
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, "users", userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user >>: ", error.message);
    }
    
  }

  return docRef;
};

export {
  db as firestore,
  signInWithGoogle,
  auth,
  createUserProfileDocument,
  onSnapshot,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
};
export default app;