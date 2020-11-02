import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTrWFX056qDqHbLEk2AFYVz1isxGFljG8",
    authDomain: "dps-guia.firebaseapp.com",
    databaseURL: "https://dps-guia.firebaseio.com",
    projectId: "dps-guia",
    storageBucket: "dps-guia.appspot.com",
    messagingSenderId: "942555010013",
    appId: "1:942555010013:web:ea110452b578a1863e9c34"
};

//constante para inicializar la conexion a firebase
const fb = firebase.initializeApp(firebaseConfig);
//exportando base
export const db = fb.firestore();