import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAD0_UMXL2I6o44hKVaYf1WvGDRkwQ0JvY",
  authDomain: "ecommerce-db-202c1.firebaseapp.com",
  projectId: "ecommerce-db-202c1",
  storageBucket: "ecommerce-db-202c1.appspot.com",
  messagingSenderId: "547767131122",
  appId: "1:547767131122:web:25d0c929e4ef762866296b"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;