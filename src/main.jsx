import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css'
import './styles/event.css'
import './styles/Artists.css'
import './styles/Videos.css'
import './styles/News.css'
import './styles/Shop.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
