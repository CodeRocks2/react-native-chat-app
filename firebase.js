import firebase from "firebase"; //firebase

// use your own firebase config
const firebaseConfig = {
  apiKey: "api kay",
  authDomain: "auth domain",
  projectId: "project id",
  storageBucket: "storage bucket",
  messagingSenderId: "messaging sender id",
  appId: "your app id",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
