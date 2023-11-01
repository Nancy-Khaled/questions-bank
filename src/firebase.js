// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "questions-bank-app.firebaseapp.com",
  projectId: "questions-bank-app",
  storageBucket: "questions-bank-app.appspot.com",
  messagingSenderId: "653645836359",
  appId: "1:653645836359:web:3e3401ef5f1f7562c00162"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);