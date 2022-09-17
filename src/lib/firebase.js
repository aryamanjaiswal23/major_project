import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrZiJ1mn0yoWci3bRasXHMwiMRB-_Cufs",
    authDomain: "tokyo-scion-327110.firebaseapp.com",
    projectId: "tokyo-scion-327110",
    storageBucket: "tokyo-scion-327110.appspot.com",
    messagingSenderId: "695197584375",
    appId: "1:695197584375:web:c7c5af47373a02d7187cf2",
    measurementId: "G-D8KBH50J0Y"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;