import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
// Identifies SDK to Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4AMqWiMxd3BTBwHbjju9IVaqaLE60cVk",
  authDomain: "crwn-clothing-db-97915.firebaseapp.com",
  projectId: "crwn-clothing-db-97915",
  storageBucket: "crwn-clothing-db-97915.appspot.com",
  messagingSenderId: "1037801209388",
  appId: "1:1037801209388:web:1806ae8da649c7eadd1b89",
};

// Initialize Firebase
// All CRUD actions happen with Firebase app instance
const firebaseApp = initializeApp(firebaseConfig);

// gives you provider instance
// Needed to use Google Authentication
const provider = new GoogleAuthProvider();

// tell different way have GoogleAuthProvider to behave
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// pass in generated auth and provider info.
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

/*
Firebase utility file

initializeApp
Creates app instance based on a config
config is object that allows us to attach
a firebase instance to instance in remote DB.

Firebase API key
Not super secret API key
No need to worry about this.
But you need your own config to do CRUD actions
to your own specific instance of Firebase.

prompt: "select_account", 
everytime someone interacts with provider 
always have them select an account.
Unique to Google Authentication Provider. 

Why is GoogleAuthProvider a class?
Sometimes you want to generate multiple providers.
You may have different provider instance 
doing different things.
siginInWithPopup may pass in one provider
signInWithRedirect, may pass another.
Can have multiple different provdieres

Authetication - getAuth()
A singleton.
Rules for authentication is the same for every app.
The authetication for app should be the same.
No need for more than authentication.
DO need more than one provider, since different
buttons that trigger different forms of sign in.
Say siginInWithPopup  or signInWithRedirect.


*/
