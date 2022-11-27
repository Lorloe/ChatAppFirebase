// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  //Database from chat
  //apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyDhDljXaCdwJobY6GyQFa77WO5Gtqbo4kM",
  authDomain: "chat-a09a8.firebaseapp.com",
  projectId: "chat-a09a8",
  storageBucket: "chat-a09a8.appspot.com",
  messagingSenderId: "501218985122",
  appId: "1:501218985122:web:fda7ed64e4aa498213c3fb"

  //Database from chatApp
  /*apiKey: "AIzaSyABO84dyFDRkaVkZJPhzNzicTgLk71bqVY",
  authDomain: "chatapp-e83f6.firebaseapp.com",
  projectId: "chatapp-e83f6",
  storageBucket: "chatapp-e83f6.appspot.com",
  messagingSenderId: "979138203636",
  appId: "1:979138203636:web:105a1d31896107c078f3a1",*/
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();