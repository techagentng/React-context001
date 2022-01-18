import React from 'react';
import MovieList from './allmovies';
import {MovieProvider} from './MovieContext';
import './App.css';

function Movie() {
 
  return (
    <>
    <MovieProvider>
    <div className="App">    
     <MovieList />
    </div>
    </MovieProvider>
    </>
  );
}

export default Movie;
