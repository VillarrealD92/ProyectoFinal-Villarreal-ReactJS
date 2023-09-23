import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdNUIuAQfpSJKu4oqali9RxCgdapklh5g",
  authDomain: "servicioscoder.firebaseapp.com",
  projectId: "servicioscoder",
  storageBucket: "servicioscoder.appspot.com",
  messagingSenderId: "490899720308",
  appId: "1:490899720308:web:266ac85d26d8c8bb7ba921",
  measurementId: "G-N4KNES14KD"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

