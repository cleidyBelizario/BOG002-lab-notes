import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAg6jtn5OrU5XiLuEjNL03fjqmgZdaPV6c",
    authDomain: "ln--registro-usuarios.firebaseapp.com",
    projectId: "ln--registro-usuarios",
    storageBucket: "ln--registro-usuarios.appspot.com",
    messagingSenderId: "884622021940",
    appId: "1:884622021940:web:1740f550bab27f729ac161"
};

const fire = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const google = new firebase.auth.GoogleAuthProvider();
const a = fire.auth();

export { a, google, db
}