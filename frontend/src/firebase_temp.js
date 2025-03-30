import { initializeApp, getApps, getApp } from "firebase/app";
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

// Initialize Firebase only if it's not already initialized
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

// Function to fetch data from a given Firestore collection
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

// Fetch Announcements, Lectures_Seminars, and Examinations
export async function fetchAnnouncements() {
  return fetchData("Announcement");
}

export async function fetchLecturesSeminars() {
  return fetchData("Lectures_Seminars");
}

export async function fetchExaminations() {
  return fetchData("Examinations");
}
