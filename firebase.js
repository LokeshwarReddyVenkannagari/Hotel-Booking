import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Corrected typo in import

const firebaseConfig = {
  apiKey: "AIzaSyDMWDFEni2o9GFsKbnrcjbKwekJbQTdasI",
  authDomain: "booking-project-7c677.firebaseapp.com",
  projectId: "booking-project-7c677",
  storageBucket: "booking-project-7c677.appspot.com",
  messagingSenderId: "480985091294",
  appId: "1:480985091294:web:2e6ae38b010c461bd7864f",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(); // Pass the app instance to getFirestore
export { auth, db };
