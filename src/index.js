import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBsG6oec4wCzeQulW3EHWNTJHZKTuIx85I",
  authDomain: "reactjs-ramirogonzalez.firebaseapp.com",
  projectId: "reactjs-ramirogonzalez",
  storageBucket: "reactjs-ramirogonzalez.appspot.com",
  messagingSenderId: "1033249916047",
  appId: "1:1033249916047:web:4ea12fa2a0855d1bd89cfa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
