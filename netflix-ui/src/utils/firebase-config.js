import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBIpysVIze385eJuhz3ITTBvyItKCECqzw",
    authDomain: "react-netflix-clone-a08b5.firebaseapp.com",
    projectId: "react-netflix-clone-a08b5",
    storageBucket: "react-netflix-clone-a08b5.appspot.com",
    messagingSenderId: "182558358990",
    appId: "1:182558358990:web:62bc690f6705bbea8aff9f",
    measurementId: "G-60MYZMDPWL"
  };





const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
