import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAGaQBEX3jU8HLnxKjZIpKmOYV2XYuQKsQ",
  authDomain: "house-marketplace-app-e0665.firebaseapp.com",
  projectId: "house-marketplace-app-e0665",
  storageBucket: "house-marketplace-app-e0665.appspot.com",
  messagingSenderId: "624804973919",
  appId: "1:624804973919:web:5efd0637a359098ec57aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore()