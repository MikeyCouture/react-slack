import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDmvQ_8SAM1zVyEtNazy6dF_dZcoMLNlF8",
  authDomain: "react-slack-1b137.firebaseapp.com",
  projectId: "react-slack-1b137",
  storageBucket: "react-slack-1b137.appspot.com",
  messagingSenderId: "639775592698",
  appId: "1:639775592698:web:7d65d33c161afb096c7943",
  measurementId: "G-DHZ5108BB6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
