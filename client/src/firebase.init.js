// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5msF-WzbBTwmASKDE9NrjJX8NOtMp0dc",
  authDomain: "twiter-clone-c0d20.firebaseapp.com",
  projectId: "twiter-clone-c0d20",
  storageBucket: "twiter-clone-c0d20.appspot.com",
  messagingSenderId: "891518998974",
  appId: "1:891518998974:web:4937919aa5c2964823c1ef",

  measurementId: "G-V1YL8XZXHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
