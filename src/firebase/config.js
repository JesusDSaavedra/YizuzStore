// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrT90uNYP090W2dojUwLZm46a-QvpudTM",
  authDomain: "yizuzstore.firebaseapp.com",
  projectId: "yizuzstore",
  storageBucket: "yizuzstore.appspot.com",
  messagingSenderId: "504255587776",
  appId: "1:504255587776:web:96ce23f352887c2e981425"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FireBaseApp );
export const FireBaseDB = getFirestore( FireBaseApp );