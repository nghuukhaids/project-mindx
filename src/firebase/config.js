
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBHT4rq9bjgyXetE4vl-TwbiQqbHDdqioE",
    authDomain: "booking-82718.firebaseapp.com",
    databaseURL: "https://booking-82718-default-rtdb.firebaseio.com",
    projectId: "booking-82718",
    storageBucket: "booking-82718.appspot.com",
    messagingSenderId: "170600776769",
    appId: "1:170600776769:web:2d5484e4ac56ab422ff2c0",
    measurementId: "G-Q71252SL01"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
export { db, auth }
export default firebase;