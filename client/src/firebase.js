// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-10687.firebaseapp.com",
  projectId: "real-estate-app-10687",
  storageBucket: "real-estate-app-10687.appspot.com",
  messagingSenderId: "493549300566",
  appId: "1:493549300566:web:ba3ec4eaebf78f7d3e84f7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
