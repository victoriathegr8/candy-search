import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {} from "./website-style.css";
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';


import CANDY_DATA from './data/candy-data.json'; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={CANDY_DATA}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

