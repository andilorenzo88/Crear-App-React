// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB5XbSCkoVrr_jVt7AuYkYtnyCaX1C_1QQ",
    authDomain: "reactjs---pegasuscomputer.firebaseapp.com",
    projectId: "reactjs---pegasuscomputer",
    storageBucket: "reactjs---pegasuscomputer.appspot.com",
    messagingSenderId: "1011540455523",
    appId: "1:1011540455523:web:cf0825b1bdbcd44fc9c856",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db
