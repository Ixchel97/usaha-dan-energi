// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC27uQEXx8vCT6gJN8FuxEhGjXtkvEDpas",
  authDomain: "usaha-dan-energi.firebaseapp.com",
  projectId: "usaha-dan-energi",
  storageBucket: "usaha-dan-energi.appspot.com",
  messagingSenderId: "358816389958",
  appId: "1:358816389958:web:037efa6c4a962e0c6b6347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// Export firestore database
// It will be imported into your react app whenever it is needed
export {db,auth}