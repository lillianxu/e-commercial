import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDzjLC1D2WRkX_Gnj04Qm-oBzgELsbSobw",
  authDomain: "crwn-db-261fa.firebaseapp.com",
  projectId: "crwn-db-261fa",
  storageBucket: "crwn-db-261fa.appspot.com",
  messagingSenderId: "90485831524",
  appId: "1:90485831524:web:877d882f333e661ddb6c71",
  measurementId: "G-28DN16CHZ2",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
