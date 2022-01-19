import {useState, useContext} from 'react';
import React from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = ()=>{
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [movies, setMovies] = useContext(MovieContext);
    const updateName = (e)=>{
        setName(e.target.value);
    }
    const updatePrice = (e)=>{
        setPrice(e.target.value);
    }
    const addMovie = (e)=>{
        e.prventDefault();
        setMovies(prev => [...prev, {name: name, price: price}])
    }
    return(
        <>
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button onSubmit={addMovie}>Submit</button>
        </form>
        </>
    )
}

export default AddMovie;