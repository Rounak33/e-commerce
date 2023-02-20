import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEgld0ZR6KKmYFZT7x5uJPtc9TE8mHqKs",
    authDomain: "wholeseller-ffe48.firebaseapp.com",
    projectId: "wholeseller-ffe48",
    storageBucket: "wholeseller-ffe48.appspot.com",
    messagingSenderId: "910980883226",
    appId: "1:910980883226:web:783b94b21f2f80211002a3",
    measurementId: "G-C1J3CX2EZY"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
