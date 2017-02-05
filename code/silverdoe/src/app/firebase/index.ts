import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    apiKey: "AIzaSyD9taKu2o17RAEkKz4y2UlfrFriaVhbrSw",
    authDomain: "silver-doe.firebaseapp.com",
    databaseURL: "https://silver-doe.firebaseio.com",
    storageBucket: "silver-doe.appspot.com",
    messagingSenderId: "969629471883"
};

const firebaseAuthConfig = {
    method: AuthMethods.Popup,
    remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);