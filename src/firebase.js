// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';



const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBClai9haNweZ-OFvuPw7kA1uRDbys32Lk",
    authDomain: "instagram-react-app-6ba96.firebaseapp.com",
    projectId: "instagram-react-app-6ba96",
    storageBucket: "instagram-react-app-6ba96.appspot.com",
    messagingSenderId: "309715018431",
    appId: "1:309715018431:web:5577c5abee1e1359319c0a",
    measurementId: "G-P9S0HJH7V9"

}) 

const db = firebaseApp.firestore();
const auth = firebase.auth()
const storage = firebase.storage()

export { db , auth , storage }


//   export default firebaseConfig; 