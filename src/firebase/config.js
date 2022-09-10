// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaXZ2MyLqXXhPmCB3pn-_95efMlLlMe-0",
  authDomain: "gallery-37066.firebaseapp.com",
  projectId: "gallery-37066",
  storageBucket: "gallery-37066.appspot.com",
  messagingSenderId: "423303952734",
  appId: "1:423303952734:web:86102cb85ad17664a637cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore, auth };
