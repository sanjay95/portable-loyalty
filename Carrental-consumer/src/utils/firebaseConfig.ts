import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfz_z__yUc25B0",
    authDomain: "afffapp.com",
    projectId: "a29",
    storageBucket: "a29.appspot.com",
    messagingSenderId: "1019572341498",
    appId: "1:10195715743",
    measurementId: "G-HW36X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

// console.log('Auth',auth);

export { auth };
