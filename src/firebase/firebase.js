import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCF1rQ4psCSfORIk2VuzCqF4FhsT_tKNTQ",
    authDomain: "saigondalatspa-82d4d.firebaseapp.com",
    projectId: "saigondalatspa-82d4d",
    storageBucket: "saigondalatspa-82d4d.appspot.com",
    messagingSenderId: "168142401305",
    appId: "1:168142401305:web:65b92f2516b0bcd9ef5f88",
    measurementId: "G-8YWDK29V72"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };