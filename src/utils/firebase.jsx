// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCsYo_lU95Ta8S06CIhY_i2xeNPlrpMV0w",
    authDomain: "netflix-gpt-2309a.firebaseapp.com",
    projectId: "netflix-gpt-2309a",
    storageBucket: "netflix-gpt-2309a.firebasestorage.app",
    messagingSenderId: "347013802921",
    appId: "1:347013802921:web:816e6e83e9fca7453bf2b8",
    measurementId: "G-JDHEHV6QJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
