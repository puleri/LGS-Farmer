import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcf1jUxWNBsBLGrvS8-pSRwEZRkoIrY2o",
    authDomain: "lgs-farmer.firebaseapp.com",
    projectId: "lgs-farmer",
    storageBucket: "lgs-farmer.appspot.com",
    messagingSenderId: "945976431321",
    appId: "1:945976431321:web:f3e54737ddcc4f699324c8",
    measurementId: "G-7789SDSZLB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);