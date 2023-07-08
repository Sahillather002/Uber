// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from 'firebase/auth';
import { Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxbgnkqUMDZefTQxYWIWUCta2Gu_OfEF0",
  authDomain: "uber-next-clone-d1d96.firebaseapp.com",
  projectId: "uber-next-clone-d1d96",
  storageBucket: "uber-next-clone-d1d96.appspot.com",
  messagingSenderId: "562891226176",
  appId: "1:562891226176:web:642589103020aa5c5833a5",
  measurementId: "G-VZWJRJ5K2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider=new GoogleAuthProvider()
const auth = getAuth()

export{app,provider,auth}