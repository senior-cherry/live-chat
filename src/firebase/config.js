import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7ODui7sFhbnYHkpNx2B90UA_srQM0h9U",
    authDomain: "fir-practice-69f52.firebaseapp.com",
    projectId: "fir-practice-69f52",
    storageBucket: "fir-practice-69f52.appspot.com",
    messagingSenderId: "640144675319",
    appId: "1:640144675319:web:c729ea52dd55896b36def2"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }