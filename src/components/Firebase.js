// Import the functions you need from the SDKs you need

import myFirebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpERUvN38pvCXNE8y7SNNZYQg1wlTYUCU",
  authDomain: "softwarelabstask.firebaseapp.com",
  projectId: "softwarelabstask",
  storageBucket: "softwarelabstask.firebasestorage.app",
  messagingSenderId: "704605589232",
  appId: "1:704605589232:web:dd6823a015ded557cf7c35",
  measurementId: "G-6MHV6XQ6ME"
};

// Initialize Firebase


const app = myFirebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const myAuth = getAuth(app)//Authentication in Firebase

export const myProvider = new GoogleAuthProvider()//Google Authentication in Firebase