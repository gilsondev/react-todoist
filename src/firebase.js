import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCSZgZiKA4ocn-yYmiwwB2jvUSiOh_AURU",
  authDomain: "react-todoist-video.firebaseapp.com",
  databaseURL: "https://react-todoist-video.firebaseio.com",
  projectId: "react-todoist-video",
  storageBucket: "react-todoist-video.appspot.com",
  messagingSenderId: "742906349781",
  appId: "1:742906349781:web:e6ddc40accdbc12042fa5c"
});

export { firebaseConfig as firebase };
