// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7mfQU2pS5zIiZxQcZ5SU9ackYzXBNhkA",
  authDomain: "auth-context2.firebaseapp.com",
  projectId: "auth-context2",
  storageBucket: "auth-context2.firebasestorage.app",
  messagingSenderId: "306692671406",
  appId: "1:306692671406:web:e9c88964269cc7c6bcea3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);