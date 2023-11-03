// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




const firebaseConfig = {
    apiKey: "AIzaSyCOGKSqk5LtHtJllCpIcz9t2IuPOxZUkaE",
    authDomain: "auth-react-25973.firebaseapp.com",
    projectId: "auth-react-25973",
    storageBucket: "auth-react-25973.appspot.com",
    messagingSenderId: "852999150746",
    appId: "1:852999150746:web:be54e3ec2145954258d323",
    measurementId: "G-ET0JTZX93G"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }