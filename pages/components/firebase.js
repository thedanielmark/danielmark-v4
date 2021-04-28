import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzFb8s3QcEowPVLArSWfOHb5myHXf590o",
    authDomain: "thedanielmark-v4.firebaseapp.com",
    projectId: "thedanielmark-v4",
    storageBucket: "thedanielmark-v4.appspot.com",
    messagingSenderId: "49428790703",
    appId: "1:49428790703:web:74f726002e83b60b86c35a",
    measurementId: "G-8SXMJR0K0Q"
};

firebase.initializeApp(firebaseConfig);