// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "multi-agentic-ai-2bb92.firebaseapp.com",
  projectId: "multi-agentic-ai-2bb92",
  storageBucket: "multi-agentic-ai-2bb92.firebasestorage.app",
  messagingSenderId: "821193190897",
  appId: "1:821193190897:web:43af2f4b88296e7248e850",
  measurementId: "G-CQ67JBH0KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const googleProvider=new GoogleAuthProvider