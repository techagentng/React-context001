import React from 'react';
import './App.css';

function LiComp(props) {
 
  return (
    <>
    <div className="App">
      <h2>{props.name}</h2>
    </div>
    </>
  );
}

export default LiComp;
