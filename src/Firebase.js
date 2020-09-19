import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({

   
        apiKey: "AIzaSyC787ehBaT0sJgqb6iT4a5gl_USYDBop7Q",
        authDomain: "stproject-5613a.firebaseapp.com",
        databaseURL: "https://stproject-5613a.firebaseio.com",
        projectId: "stproject-5613a",
        storageBucket: "stproject-5613a.appspot.com",
        messagingSenderId: "476890046343",
        appId: "1:476890046343:web:2c833c4270ee7856fd3d22",
        measurementId: "G-0H7C5HHJZP"
     
    
})
const db = firebaseApp.firestore();
export default db;