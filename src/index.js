import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUw8eSHvE6WDf0mgiiERcxoRSMskfuPLA",
  authDomain: "cart-56cf3.firebaseapp.com",
  projectId: "cart-56cf3",
  storageBucket: "cart-56cf3.appspot.com",
  messagingSenderId: "806954261228",
  appId: "1:806954261228:web:10f669b95d173c6a4263c9"
};

// Initialize Firebase
// firebaseConfig.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


