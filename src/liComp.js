import React from 'react';
import './App.css';

function LiComp({name, price}) {
 
  return (
    <>
    <div className="App">
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
    </>
  );
}

export default LiComp;
