import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const count = function(){
    console.log('we move')
}
function New() {
    return (
      <div className="App">
        <header className="App-header">
       <h1 onClick={count}>hello component</h1>
        </header>
      </div>
    );
  }

export default New;