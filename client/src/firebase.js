// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyC_LvT4gaKUhmWp7x2qXAydZa7VOu-_iK4",
  authDomain:'mern-estate-9895a.firebaseapp.com',
  projectId: "mern-estate-9895a",
  storageBucket: "mern-estate-9895a.appspot.com",
  messagingSenderId: "518311707794",
  appId: "1:518311707794:web:4053d8c573ab7916ca124b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;