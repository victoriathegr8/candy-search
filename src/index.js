import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';


import CANDY_DATA from './data/candy-data.json'; 

var firebaseConfig = {
  apiKey: "AIzaSyAnjzt9GnzIR_514sGHuyAFeui5fO65uyY",
  authDomain: "candy-website-whippersnappers.firebaseapp.com",
  projectId: "candy-website-whippersnappers",
  storageBucket: "candy-website-whippersnappers.appspot.com",
  messagingSenderId: "558985836196",
  appId: "1:558985836196:web:4d86b8a1f81c6ef2945831",
  measurementId: "G-NYW77RD2EB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={CANDY_DATA}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

