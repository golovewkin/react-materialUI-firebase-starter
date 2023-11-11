import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import debounce from "debounce";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORGARE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};
const firebaseApp = initializeApp(config, "firebase-starter");
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const onUserlogin = debounce(onAuthStateChanged, 200);
const logIn = signInWithEmailAndPassword;
export { auth, onUserlogin, logIn, doc, getDoc, db };
