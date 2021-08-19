import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAMOPv8oR2PGnuNMpI_eXof0jkfon1oRSY",
  authDomain: "live-chat-560fd.firebaseapp.com",
  databaseURL: "https://live-chat-560fd-default-rtdb.firebaseio.com",
  projectId: "live-chat-560fd",
  storageBucket: "live-chat-560fd.appspot.com",
  messagingSenderId: "97036334721",
  appId: "1:97036334721:web:df501dafe9d61514577f80",
  measurementId: "G-071K8NKLB6"
};

const fire =firebase.default.initializeApp(firebaseConfig); 

const fireb= fire.database().ref();

const auth = firebase.default.auth()

 export {auth, fireb};