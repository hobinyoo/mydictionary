// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWyFdqzzilu-PXkoMBGH4nDop4NVLhsEE",
    authDomain: "mydic-86ef1.firebaseapp.com",
    projectId: "mydic-86ef1",
    storageBucket: "mydic-86ef1.appspot.com",
    messagingSenderId: "5266567701",
    appId: "1:5266567701:web:d708f05e686e8571ba141c",
    measurementId: "G-RTKC1G12Q8"
  };

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
