// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuDfeDW7JOmM9-hjVvqAYzmNBVEkGhQ78",
  authDomain: "area-342718.firebaseapp.com",
  projectId: "area-342718",
  storageBucket: "area-342718.appspot.com",
  messagingSenderId: "427354900946",
  appId: "1:427354900946:web:efc41094ab3612375d200b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
