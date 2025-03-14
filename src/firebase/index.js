import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Firebase konfiguratsiyasi
const firebaseConfig = {
    apiKey: "AIzaSyCvvuIhmkNj6moKDRHyZoj5Q6F3EKckai4",
    authDomain: "biletick-dcb80.firebaseapp.com",
    projectId: "biletick-dcb80",
    storageBucket: "biletick-dcb80.firebasestorage.app",
    messagingSenderId: "1075128596094",
    appId: "1:1075128596094:web:8cba63b05e0861347c0a2f"
  };

// Firebase ilovasini boshlash
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google va GitHub autentifikatsiya provayderlari
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
