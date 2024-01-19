import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAlrO0BFgdZmV85McqEww7itX_lIyVvHio",
  authDomain: "sport-food-1308.firebaseapp.com",
  projectId: "sport-food-1308",
  storageBucket: "sport-food-1308.appspot.com",
  messagingSenderId: "985085468600",
  appId: "1:985085468600:web:e024cc4a854c8a53c7794d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
