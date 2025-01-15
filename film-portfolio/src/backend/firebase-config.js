// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore if you need to use it

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk6YdF57KtoZiwn95Fk-oSesRnfh1YfoM",
    authDomain: "kk-film-portfolio.firebaseapp.com",
    projectId: "kk-film-portfolio",
    storageBucket: "kk-film-portfolio.firebasestorage.app",
    messagingSenderId: "22469201117",
    appId: "1:22469201117:web:b8cd8d45d3cdb0eaf51f34",
    measurementId: "G-9W5C00YNMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore


export { db, analytics };


