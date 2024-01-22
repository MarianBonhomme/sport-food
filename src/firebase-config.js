import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlrO0BFgdZmV85McqEww7itX_lIyVvHio",
  authDomain: "sport-food-1308.firebaseapp.com",
  databaseURL: "https://sport-food-1308-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sport-food-1308",
  storageBucket: "sport-food-1308.appspot.com",
  messagingSenderId: "985085468600",
  appId: "1:985085468600:web:e024cc4a854c8a53c7794d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
