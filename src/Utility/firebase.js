import firebase from "firebase/compat/app";
// Authentication
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx9dgs7reCw8LjasgBsuSq19Kf1LwqWKs",
  authDomain: "clone-react-e1508.firebaseapp.com",
  projectId: "clone-react-e1508",
  storageBucket: "clone-react-e1508.firebasestorage.app",
  messagingSenderId: "125494364450",
  appId: "1:125494364450:web:4c8787c23ea59190157d7b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore;
