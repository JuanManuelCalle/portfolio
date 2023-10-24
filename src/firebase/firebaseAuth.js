import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnLwKtNxwikfyHLjj3Pb_-gNRxe01dm1A",
  authDomain: "portfolio-baef9.firebaseapp.com",
  projectId: "portfolio-baef9",
  storageBucket: "portfolio-baef9.appspot.com",
  messagingSenderId: "694570918301",
  appId: "1:694570918301:web:2f06d8a38f221b8d1d4f74"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db