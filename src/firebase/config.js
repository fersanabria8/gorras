// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB9mgjGQdqlNG28Qn4nEV-ZiZXy8IWyv8",
  authDomain: "gorras-bebe1.firebaseapp.com",
  projectId: "gorras-bebe1",
  storageBucket: "gorras-bebe1.appspot.com",
  messagingSenderId: "307719197612",
  appId: "1:307719197612:web:86fe4dbdc7b9af175b6009",
  measurementId: "G-NCQZ71K615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);