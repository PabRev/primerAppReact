import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiUw13-KqwZ8GW76vHO8qnNNpV2pHMU-g",
  authDomain: "db-react-tienda.firebaseapp.com",
  projectId: "db-react-tienda",
  storageBucket: "db-react-tienda.appspot.com",
  messagingSenderId: "440604264217",
  appId: "1:440604264217:web:ec3b9d5563b036b863e788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);