import * as firebase from "firebase";
require("@firebase/firestore");

var Config = {
  apiKey: "AIzaSyAQpbesKbwgO7dGKawtqF7om1mbWrOoBWQ",
  authDomain: "willy-c77e1.firebaseapp.com",
  databaseURL: "https://willy-c77e1-default-rtdb.firebaseio.com",
  projectId: "willy-c77e1",
  storageBucket: "willy-c77e1.appspot.com",
  messagingSenderId: "1034447810660",
  appId: "1:1034447810660:web:0e8855afe459832009ef71",
};
// Initialize Firebase
firebase.initializeApp(Config);

export default firebase.firestore();
