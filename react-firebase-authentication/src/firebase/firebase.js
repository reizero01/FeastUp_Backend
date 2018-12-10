import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
  apiKey: "AIzaSyAezRNZzJM_m9IMXXYH659yUlWT6Zk97Rs",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  databaseURL: "https://freeload-9a0e3.firebaseio.com/",
  projectId: "freeload-9a0e3",
  storageBucket: '',
  messagingSenderId: "AIzaSyCVPu5Z1T_JwIY9ZaNdHknH5LOdSG7ia1c",
};

const devConfig = {
  apiKey: "AIzaSyAezRNZzJM_m9IMXXYH659yUlWT6Zk97Rs",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  databaseURL: "https://freeload-9a0e3.firebaseio.com/",
  projectId: "freeload-9a0e3",
  storageBucket: '',
  messagingSenderId: "AIzaSyCVPu5Z1T_JwIY9ZaNdHknH5LOdSG7ia1c",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};