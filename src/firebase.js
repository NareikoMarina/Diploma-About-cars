import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAP3fczefS1Unk7G0iymhX0PL9CreqRdtw",
    authDomain: "cars-f707c.firebaseapp.com",
    databaseURL: "https://cars-f707c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cars-f707c",
    storageBucket: "cars-f707c.appspot.com",
    messagingSenderId: "938786161740",
    appId: "1:938786161740:web:0890fc2f7d6ef8fc2d60e9"
  };

export const fb = firebase.initializeApp(firebaseConfig);