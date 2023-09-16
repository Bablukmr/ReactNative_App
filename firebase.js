import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBZq6gNZAD8HZJOVlqzIYcGYbX_uflIJKA",
    authDomain: "todoapp-560ef.firebaseapp.com",
    projectId: "todoapp-560ef",
    storageBucket: "todoapp-560ef.appspot.com",
    messagingSenderId: "577111528125",
    appId: "1:577111528125:web:a1f08a77ff39e5eb879dd4",
    measurementId: "G-4X27R0WGTE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}