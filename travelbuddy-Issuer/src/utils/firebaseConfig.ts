import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_z__yUc25B0",
    authDomain: "af.firebaseapp.com",
    projectId: "afff-",
    storageBucket: "afff.appspot.com",
    messagingSenderId: "1019578",
    appId: "19a0115743",
    measurementId: "G-HWG6X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

// console.log('Auth',auth);

export { auth };
