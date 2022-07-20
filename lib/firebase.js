// project name: everythingproject

import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4jciLLfgcU-A952g_ogldSYcTzjWYO-A",
  authDomain: "everythingproject-bf4a3.firebaseapp.com",
  projectId: "everythingproject-bf4a3",
  storageBucket: "everythingproject-bf4a3.appspot.com",
  messagingSenderId: "414136523395",
  appId: "1:414136523395:web:c0325c1a63fc4097b0d9b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signIn = () => {
  signInWithPopup(auth, provider);
};
export const signOut = () => {
  auth.signOut().then(window.location.reload());
};

export const signUpEithEmail = (newEmail, newPassword) => {
  createUserWithEmailAndPassword(auth, newEmail, newPassword)
    // .then((userCredential) => {
    //   const user = userCredential;
    //   console.log(user);
    // })
    .catch((error) => {
      const err = error.code;
      console.log(err); // can user these errors to show the user the error so they can fix, i prefer using switch keys to render the error to users. not doing this atm because this is a dummy project. no need to get too technical.
    });
};
export const signInWithEmail = (newEmail, newPassword) => {
  signInWithEmailAndPassword(auth, newEmail, newPassword).catch((error) => {
    const err = error.code;
    console.log(err);
  });
};
