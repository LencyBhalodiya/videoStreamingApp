import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpbyPk1BmIVGasGvUckiIyQA-yzARbreo",
  authDomain: "videoapp-98e3f.firebaseapp.com",
  projectId: "videoapp-98e3f",
  storageBucket: "videoapp-98e3f.appspot.com",
  messagingSenderId: "560878089754",
  appId: "1:560878089754:web:ac44938655001f92e2c3a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app;