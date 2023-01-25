// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOgQADnG4TJkWFdOtpxmybSbNVDh8bfME",
  authDomain: "taskzenith.firebaseapp.com",
  databaseURL: "https://taskzenith-default-rtdb.firebaseio.com",
  projectId: "taskzenith",
  storageBucket: "taskzenith.appspot.com",
  messagingSenderId: "627814321332",
  appId: "1:627814321332:web:d9ca212f757af6d666dbe1",
  measurementId: "G-1Z3RYYGYYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
