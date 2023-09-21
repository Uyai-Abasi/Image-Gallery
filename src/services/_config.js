// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBM0wBtIvZIihK5KERWSE2ZLYtoQnMHz2o",
  authDomain: "imagegallery-bc33a.firebaseapp.com",
  projectId: "imagegallery-bc33a",
  storageBucket: "imagegallery-bc33a.appspot.com",
  messagingSenderId: "475920346425",
  appId: "1:475920346425:web:3772761eaae2bf80544ce8",
  measurementId: "G-34ZN90TH6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };