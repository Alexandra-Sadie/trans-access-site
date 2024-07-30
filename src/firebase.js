// This exists as the file where we store all our relevant Firebase information, which allows us to pull Firebase data, functions, etc, throughout the app.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2vfcHQXN6uf7THKPAhdvwxruTDDEgMos",
  authDomain: "trans-access-site.firebaseapp.com",
  projectId: "trans-access-site",
  storageBucket: "trans-access-site.appspot.com",
  messagingSenderId: "89381292681",
  appId: "1:89381292681:web:c1e6928c4248fc1f949458",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
