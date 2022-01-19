import React from 'react';
import MovieList from './allmovies';
import {MovieProvider} from './MovieContext';
import Form from './addMovie';
import './App.css';

function Movie() {
 
  return (
    <>
    <MovieProvider>
    <div className="App">   
    
     <MovieList />
     <Form /> 
    </div>
    </MovieProvider>
    </>
  );
}

export default Movie;
