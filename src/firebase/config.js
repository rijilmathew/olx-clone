import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDHmn5NttQNXn0WGOFtQkYDAnMNB8Y0wxo",
  authDomain: "olx-demo-1b1cb.firebaseapp.com",
  projectId: "olx-demo-1b1cb",
  storageBucket: "olx-demo-1b1cb.appspot.com",
  messagingSenderId: "311690784145",
  appId: "1:311690784145:web:0c938c82e4c210539efe30",
  measurementId: "G-6XBMKH1Z3K"
};

export const Firebase = firebase.initializeApp(firebaseConfig);