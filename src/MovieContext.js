import React, {useState, createContext} from 'react'
export const MovieContext = createContext();
export const MovieProvider = (props)=>{
    const [movies, setMovies] = useState([
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
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}; 