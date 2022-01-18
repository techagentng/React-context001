import React from 'react';
import MovieList from './allmovies'
import MovieContext from './MovieContext'
import './App.css';

function Movie() {
 
  return (
    <>
    <MovieContext>    <div className="App">
     <MovieList />
    </div>
    </MovieContext>
    </>
  );
}

export default Movie;
