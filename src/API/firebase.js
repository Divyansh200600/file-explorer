import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyARzYQxx4d0m_3b9AMyWY2RkxUn3IdgpC8",
  authDomain: "file-explorer-2a6ac.firebaseapp.com",
  projectId: "file-explorer-2a6ac",
  storageBucket: "file-explorer-2a6ac.appspot.com",
  messagingSenderId: "809629429122",
  appId: "1:809629429122:web:d6fe8c146dd719e241739b",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  docs: firestore.collection('docs'),
  files: firestore.collection('files'),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
