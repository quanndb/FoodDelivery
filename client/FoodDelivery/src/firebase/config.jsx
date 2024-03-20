// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByE0cajKmexmaNPo2qnDVuS7dTkZb7Owg",
  authDomain: "food-delivery-2e3f8.firebaseapp.com",
  projectId: "food-delivery-2e3f8",
  storageBucket: "food-delivery-2e3f8.appspot.com",
  messagingSenderId: "206673268344",
  appId: "1:206673268344:web:33f970fb3189ad577e678d",
  measurementId: "G-VD4B7YKFP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
