// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_n1gpKiYoFn3FH0M8mw6Akldwzc8VlV0",
  authDomain: "financlly.firebaseapp.com",
  projectId: "financlly",
  storageBucket: "financlly.appspot.com",
  messagingSenderId: "465165310406",
  appId: "1:465165310406:web:deba88580083477db5fac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };
