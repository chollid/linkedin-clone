import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC3Mr1hDFPUz1PrPI59N8mQbhlsx5KRXfQ",
    authDomain: "linkedin-clone-a6e7d.firebaseapp.com",
    projectId: "linkedin-clone-a6e7d",
    storageBucket: "linkedin-clone-a6e7d.appspot.com",
    messagingSenderId: "701387217180",
    appId: "1:701387217180:web:30510decf8ea8b3e59c2d9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };