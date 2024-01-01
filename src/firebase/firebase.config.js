import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE__REACT__API__KEY,
  authDomain: import.meta.env.VITE__REACT__AUTH__DOMAIN,
  projectId: import.meta.env.VITE__REACT__PROJECT__ID,
  storageBucket: import.meta.env.VITE__REACT__STORAGE__BUCKET,
  messagingSenderId: import.meta.env.VITE__REACT__MESSAGING__SENDER__ID,
  appId: import.meta.env.VITE__REACT__APP__ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const halalAuth = getAuth(app);