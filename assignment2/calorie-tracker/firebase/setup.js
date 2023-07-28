// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Config from "react-native-config";

const firebaseConfig = {
    apiKey: Config.API_KEY,
    authDomain: Config.AUTH_DOMAIN,
    projectId: Config.PROJECT_ID,
    storageBucket: Config.STORAGE_BUCKET,
    messagingSenderId: Config.MESSAGING_SENDER_ID,
    appId: Config.APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
