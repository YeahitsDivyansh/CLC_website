import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKz0TKAwvi2ZBTVLnfPbJrUOocdATW2Y4",
  authDomain: "clc-website-a9b43.firebaseapp.com",
  projectId: "clc-website-a9b43",
  storageBucket: "clc-website-a9b43.firebasestorage.app",
  messagingSenderId: "417123105716",
  appId: "1:417123105716:web:5a1742fa0af736d2d5d0e1",
  measurementId: "G-9GW8BH44RM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
