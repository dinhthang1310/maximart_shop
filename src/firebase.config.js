import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCORiWSvnpjfYx--PW2P-Zu31He7jeW-wE",
    authDomain: "shooping-c8d1c.firebaseapp.com",
    projectId: "shooping-c8d1c",
    storageBucket: "shooping-c8d1c.appspot.com",
    messagingSenderId: "549468283998",
    appId: "1:549468283998:web:0acf424f43102a616a00cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app