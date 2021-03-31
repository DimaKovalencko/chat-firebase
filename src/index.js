import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyAQR8cDPIWU3TbvFj7YmsoSktXJ_pJFlGo",
    authDomain: "chat-react-4b238.firebaseapp.com",
    projectId: "chat-react-4b238",
    storageBucket: "chat-react-4b238.appspot.com",
    messagingSenderId: "714549678025",
    appId: "1:714549678025:web:a063488f7b11ccfa5f6218",
    measurementId: "G-Z3D3LH5RDQ"
  });

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

