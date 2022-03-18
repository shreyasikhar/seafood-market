import Rebase from "re-base";
import firebase from "firebase";

// firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCxx_rJULn3_PCA7EHJ7pUrB7qspRbC8HQ",
  authDomain: "wesbos-reactjs-beginner.firebaseapp.com",
  databaseURL:
    "https://wesbos-reactjs-beginner-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export.
export { firebaseApp };

// This is a default export.
export default base;
