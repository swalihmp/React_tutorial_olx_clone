import firebase from 'firebase'
import 'firebase/auth'

import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDiBFahvPtTZBCVq_AXYPBUPcuMOhd4CPQ",
  authDomain: "olx-app-afdda.firebaseapp.com",
  projectId: "olx-app-afdda",
  storageBucket: "olx-app-afdda.appspot.com",
  messagingSenderId: "1058057386974",
  appId: "1:1058057386974:web:80dd88d5c41ad905dc3b4f",
  measurementId: "G-WZ6MSDXQHR"
};

export default firebase.initializeApp(firebaseConfig)
