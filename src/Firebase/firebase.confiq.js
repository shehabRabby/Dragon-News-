// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPNCbGZciiDwIj6Tls0pOOtV1Wpzi6iio",
  authDomain: "dragon-news-firebase-d7ca5.firebaseapp.com",
  projectId: "dragon-news-firebase-d7ca5",
  storageBucket: "dragon-news-firebase-d7ca5.firebasestorage.app",
  messagingSenderId: "1030853257901",
  appId: "1:1030853257901:web:8f3bdf1a1736efe33d7424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// import { getAuth} from "firebase/auth";