import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBK8waE1-ooM5NkM4L4qYtjyW1cXtd7vw",
  authDomain: "chat-f5b45.firebaseapp.com",
  projectId: "chat-f5b45",
  storageBucket: "chat-f5b45.appspot.com",
  messagingSenderId: "734179321030",
  appId: "1:734179321030:web:a2417252f6c7a739f823c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();