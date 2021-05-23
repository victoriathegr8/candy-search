import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {} from "./website-style.css";


import CANDY_DATA from './data/candy-data.json'; 

ReactDOM.render(<App pets={CANDY_DATA} />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

