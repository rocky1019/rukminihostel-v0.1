import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBDCRfYENoJWHSq5TiJRfFmKQgyarjn3J0",
    authDomain: "rukmini-hostel.firebaseapp.com",
    projectId: "rukmini-hostel",
    storageBucket: "rukmini-hostel.firebasestorage.app",
    messagingSenderId: "513748325001",
    appId: "1:513748325001:web:daaf8dd3b5ff7d35726c58",
    measurementId: "G-7M3X91SZDM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
export const auth = getAuth(app);


// Cloud Firestore
export const db = getFirestore(app);