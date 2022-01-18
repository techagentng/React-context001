import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movie from './App';
import * as serviceWorker from './serviceWorker';
import Nav from './Nav';
import New from './component/new';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Movie />
    <New />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
