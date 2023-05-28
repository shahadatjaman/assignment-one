import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBftihHu3Y5XVAEHFNzredrhdNsGmMXxBs",
  authDomain: "stockgro-1ebcd.firebaseapp.com",
  projectId: "stockgro-1ebcd",
  storageBucket: "stockgro-1ebcd.appspot.com",
  messagingSenderId: "502176370030",
  appId: "1:502176370030:web:818764c79f4ae765df457f",
  measurementId: "G-N3457KSFKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
