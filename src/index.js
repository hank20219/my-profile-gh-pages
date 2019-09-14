import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import Repos from './components/Repos';
import User from './components/User';
import Contacts from './components/Contacts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
