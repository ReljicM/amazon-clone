// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBQIWcICrs4cpkFhVnOAKijAU9_ezUbpSs",
  authDomain: "clone-7aa3d.firebaseapp.com",
  projectId: "clone-7aa3d",
  storageBucket: "clone-7aa3d.appspot.com",
  messagingSenderId: "317328742907",
  appId: "1:317328742907:web:662b3b6b05b89158bf935e",
  measurementId: "G-110CQWT7RJ"
};

// Initialize Firebase

try {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	console.log("Firebase Initialized");
  } catch (err) {
	console.log("Error Initializing Firebase");
}

const auth = getAuth()
const db = firebase.firestore()
export {db, auth}
export default firebase;