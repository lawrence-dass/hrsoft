import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCzIb7N7F-8gRSg_HwmPOHN5_P0Zlo5vKI',
  authDomain: 'hrsoft-65876.firebaseapp.com',
  databaseURL: 'https://hrsoft-65876.firebaseio.com',
  projectId: 'hrsoft-65876',
  storageBucket: 'hrsoft-65876.appspot.com',
  messagingSenderId: '799183706016'
};

firebase.initializeApp(config);

const database = firebase.database();
export { firebase, database as default };
