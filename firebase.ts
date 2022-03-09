import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzgJfOPDKCpnoWz-uxvMKP-3J912izy48",
  authDomain: "textlaris.firebaseapp.com",
  databaseURL: "https://textlaris-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "textlaris",
  storageBucket: "textlaris.appspot.com",
  messagingSenderId: "998625697488",
  appId: "1:998625697488:web:dc3e446eaf238d07f288d5"
};


const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
