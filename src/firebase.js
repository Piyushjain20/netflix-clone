import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb6Q31bdE1wHNFBFWxFH602qhr2Qaq10I",
  authDomain: "cloneflix-123.firebaseapp.com",
  projectId: "cloneflix-123",
  storageBucket: "cloneflix-123.appspot.com",
  messagingSenderId: "371095661113",
  appId: "1:371095661113:web:aa3f6000b3db8f1017bbe8",
};

// npm install -g firebase-tools
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
