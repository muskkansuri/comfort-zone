// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA2T991wecCv0r9WxDPOTLgEOo8MQMrBiA",
    authDomain: "clone-a78b1.firebaseapp.com",
    projectId: "clone-a78b1",
    storageBucket: "clone-a78b1.appspot.com",
    messagingSenderId: "117754391342",
    appId: "1:117754391342:web:adb70949e22de0e5b8a8bf",
    measurementId: "G-XD6PMGCVHF"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth};