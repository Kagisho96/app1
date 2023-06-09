import {initializeApp } from "firebase/app"
import {getFirestore, collection, addDoc, onSnapshot} from "firebase/firestore"


// Firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyCNcqogtkV2d3EKES9Czzl4bB486s3jStw",
  authDomain: "agritech-app-70ee6.firebaseapp.com",
  projectId: "agritech-app-70ee6",
  storageBucket: "agritech-app-70ee6.appspot.com",
  messagingSenderId: "221466055006",
  appId: "1:221466055006:web:9672d714626a58a7f2bfcf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}