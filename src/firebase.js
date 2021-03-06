import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBo2CdPa2bMExkPCObubdtKtAxwC5UgASg",
        authDomain: "messanger-clone-4819e.firebaseapp.com",
        projectId: "messanger-clone-4819e",
        storageBucket: "messanger-clone-4819e.appspot.com",
        messagingSenderId: "686470662374",
        appId: "1:686470662374:web:3b94eaadd0aed9ce475327",
        measurementId: "G-P3EH14ZSW3"
      

});
 const db = firebaseApp.firestore();
 export default db;
