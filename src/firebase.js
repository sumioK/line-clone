import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBqHfTMrAJHKhGxPzeSFPMDbKYVMq_e-zo",
  authDomain: "line-clone-c67b3.firebaseapp.com",
  projectId: "line-clone-c67b3",
  storageBucket: "line-clone-c67b3.appspot.com",
  messagingSenderId: "79669106927",
  appId: "1:79669106927:web:fb557dfd3ba23bd9cfe31a"
})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth();

export {db, auth};