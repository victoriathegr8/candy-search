import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./website-style.css";


import CANDY_DATA from './data/candy-data.json'; 

ReactDOM.render(
  <React.StrictMode>
    <App data={CANDY_DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

