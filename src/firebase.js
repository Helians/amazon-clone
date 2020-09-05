import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuvmcgPEfwwkkEidTB4r58cKmuN2veEBQ",
    authDomain: "clone-dd42a.firebaseapp.com",
    databaseURL: "https://clone-dd42a.firebaseio.com",
    projectId: "clone-dd42a",
    storageBucket: "clone-dd42a.appspot.com",
    messagingSenderId: "890004323085",
    appId: "1:890004323085:web:5917de3d388b0e19670e44",
    measurementId: "G-Y29TZSVWKF"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };