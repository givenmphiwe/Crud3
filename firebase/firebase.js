import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAa4V8BiS2igMSZT7h7LGnZljhia_5grqc",
    authDomain: "move-it-78630.firebaseapp.com",
    databaseURL: "https://move-it-78630-default-rtdb.firebaseio.com",
    projectId: "move-it-78630",
    storageBucket: "move-it-78630.appspot.com",
    messagingSenderId: "975622199028",
    appId: "1:975622199028:web:3dd1986dbba094f924b0a1",
    measurementId: "G-RQNXDX3W2S"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;