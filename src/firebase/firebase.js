import * as firebase from 'firebase';


let config = {
    apiKey: "AIzaSyD99EtiHwbkC2x4peTN9dyPrAMxJ_klYjQ",
    authDomain: "rekt-d663a.firebaseapp.com",
    databaseURL: "https://rekt-d663a.firebaseio.com",
    projectId: "rekt-d663a",
    storageBucket: "rekt-d663a.appspot.com",
    messagingSenderId: "482457525765"
  };


firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});