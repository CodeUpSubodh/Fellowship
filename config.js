import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyDQpZofgR4KFDiogzTbOhBQBR9GsrgyNIw",
  authDomain: "fellowship-c8f2c.firebaseapp.com",
  projectId: "fellowship-c8f2c",
  storageBucket: "fellowship-c8f2c.appspot.com",
  messagingSenderId: "22897810693",
  appId: "1:22897810693:web:45b04066e104589024eb6c"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};