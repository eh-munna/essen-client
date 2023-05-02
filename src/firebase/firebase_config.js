// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCl0804kH3vFUkBclVbWqDt0PYwMlkkREY',
  authDomain: 'chef-auth-6e24d.firebaseapp.com',
  projectId: 'chef-auth-6e24d',
  storageBucket: 'chef-auth-6e24d.appspot.com',
  messagingSenderId: '61501541285',
  appId: '1:61501541285:web:5f7afb9b433221e406364c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
