import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKz0TKAwvi2ZBTVLnfPbJrUOocdATW2Y4",
  authDomain: "clc-website-a9b43.firebaseapp.com",
  projectId: "clc-website-a9b43",
  storageBucket: "clc-website-a9b43.appspot.com",
  messagingSenderId: "417123105716",
  appId: "1:417123105716:web:5a1742fa0af736d2d5d0e1",
  measurementId: "G-9GW8BH44RM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

// Function to fetch data from Firestore
export async function fetchData(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error);
    return [];
  }
}

// Function to get file URL from Firebase Storage
export async function getFileUrl(filePath) {
  try {
    const fileRef = ref(storage, filePath);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error("Error getting file URL:", error);
    return null;
  }
}