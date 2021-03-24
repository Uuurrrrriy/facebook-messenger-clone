import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQ58rFITiLFFc2cEW-7h4ceGBpZlcPHP0",
  authDomain: "facebook-messenger-clone-9b3e5.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-9b3e5.firebaseio.com",
  projectId: "facebook-messenger-clone-9b3e5",
  storageBucket: "facebook-messenger-clone-9b3e5.appspot.com",
  messagingSenderId: "957138272325",
  appId: "1:957138272325:web:c884ff16fb6ffa4c0d632c",
  measurementId: "G-JX6Y7Q6CSF",
});

const db = firebaseApp.firestore();

export { db };
