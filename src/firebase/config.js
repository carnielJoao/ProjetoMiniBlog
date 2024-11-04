import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNrWKG6H1VwdEzNV7Qxfh7DqKJvlq3_0g",
  authDomain: "miniblog-9fe62.firebaseapp.com",
  projectId: "miniblog-9fe62",
  storageBucket: "miniblog-9fe62.firebasestorage.app",
  messagingSenderId: "197683312723",
  appId: "1:197683312723:web:61f9e335bfd267ecbcaea6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };