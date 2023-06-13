// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRHdYyLG51QyETV-eD9iYJ94orsPSde9U",
  authDomain: "fir-639eb.firebaseapp.com",
  projectId: "fir-639eb",
  storageBucket: "fir-639eb.appspot.com",
  messagingSenderId: "158324461721",
  appId: "1:158324461721:web:6cdb1309744e20c8076808",
  measurementId: "G-K2GDSFQEPR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
