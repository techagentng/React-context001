import React from 'react';
import {useState} from 'react';
import LiComp from './liComp'
import './App.css';

function MovieList(props) {
  const [movies, setMovie] = useState([
    {
      name:"doe",
      price:300,
      Id: 1
    },
    {
      name: "kal",
      price:300,
      Id: 2
    }, 
     {
      name: "bull",
      price:500,
      Id: 3
    },
     {
      name: "karl",
      price:2000,
      Id: 4
    },
  ])
  return (
    <>
    <div className="App">
      {movies.map((movie)=>(
        <LiComp name={movie.name}/>
  ))}
    </div>
    </>
  );
}

export default MovieList;
