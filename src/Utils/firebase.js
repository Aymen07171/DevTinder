// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz9pUBLWHk2Eh9FHUhQCC6N4x8xq6F3r0",
  authDomain: "tinderdev-7767d.firebaseapp.com",
  projectId: "tinderdev-7767d",
  storageBucket: "tinderdev-7767d.firebasestorage.app",
  messagingSenderId: "404751341722",
  appId: "1:404751341722:web:a72027ed9b1fc62c662723",
  measurementId: "G-K2V506MMXL"
};


// Initialize Firebase Authentication
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;