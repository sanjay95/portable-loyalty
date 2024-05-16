import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAffyRqjDVjzhsElBtLyniz_z__yUc25B0",
    authDomain: "afff-bf229.firebaseapp.com",
    projectId: "afff-bf229",
    storageBucket: "afff-bf229.appspot.com",
    messagingSenderId: "1019572341498",
    appId: "1:1019572341498:web:4b66bdb218add9a0115743",
    measurementId: "G-HWGX50236X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

// console.log('Auth',auth);

export { auth };
