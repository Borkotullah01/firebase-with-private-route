import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFlVnAgLj2xCubpJ-UtOUIwI8xAkuO138",
  authDomain: "fir-with-private-route-3cbf8.firebaseapp.com",
  projectId: "fir-with-private-route-3cbf8",
  storageBucket: "fir-with-private-route-3cbf8.appspot.com",
  messagingSenderId: "918224800794",
  appId: "1:918224800794:web:8ca3009c48ca2c4ee115a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);