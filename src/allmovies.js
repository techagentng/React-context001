import React from 'react';
//import {useState} from 'react';
import LiComp from './liComp'
import './App.css';

function MovieList(props) {
 
  return (
    <>
    <div className="App">
      {movies.map((movie)=>(
        <LiComp name={movie.name} price={movie.price} key={movie.Id}/>
  ))}
    </div>
    </>
  );
}

export default MovieList;
