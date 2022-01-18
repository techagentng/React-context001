import React from 'react';
import {useState, useContext} from 'react';
import LiComp from './liComp'
import {MovieContext} from './MovieContext';
import './App.css';

function MovieList(props) {
 const [movies, setMovies] = useContext(MovieContext)
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
