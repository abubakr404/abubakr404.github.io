import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "abubakr-404.firebaseapp.com",
  projectId: "abubakr-404",
  storageBucket: "abubakr-404.appspot.com",
  messagingSenderId: "942257585014",
  appId: "1:942257585014:web:e0a8242e3883a4a5e81857",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
