import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"


//config

const firebaseConfig = {
    apiKey: "AIzaSyCkqaNO2Qw2Bm_T7rEejGRxM5VgYOZeCVc",
    authDomain: "chatter-90534.firebaseapp.com",
    projectId: "chatter-90534",
    storageBucket: "chatter-90534.appspot.com",
    messagingSenderId: "860623320629",
    appId: "1:860623320629:web:fe5064678984025b86237c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//login functions
//dispatch error to redux maybe?

export async function authLoginWithEmailAndPassword(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

export async function authCreateAccount(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

export async function authSignInWithGoogle() {
    try {
        const userCredential = await signInWithPopup(auth, provider);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}


