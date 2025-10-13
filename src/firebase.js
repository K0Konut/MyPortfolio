import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA4bblX8KM7yvmoxSmI0bR2dP4VuWmpfIg",
  authDomain: "portfolio-costa-dev.firebaseapp.com",
  projectId: "portfolio-costa-dev",
  storageBucket: "portfolio-costa-dev.firebasestorage.app",
  messagingSenderId: "168539818463",
  appId: "1:168539818463:web:9936cc4e2cba7c11a15c6a",
  measurementId: "G-LXYLW4EVQ4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
export const storage = getStorage(app)

export { auth , db, storage}
