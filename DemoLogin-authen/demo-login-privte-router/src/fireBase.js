// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg-Imu0oa2wBvQQ76BANbnE1RMhJP4XPs",
  authDomain: "minato-d26af.firebaseapp.com",
  projectId: "minato-d26af",
  storageBucket: "minato-d26af.appspot.com",
  messagingSenderId: "70634730722",
  appId: "1:70634730722:web:cce46db946ebf6bb5f1abb",
  measurementId: "G-TYMXQ0C0EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
