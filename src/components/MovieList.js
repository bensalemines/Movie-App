import React from 'react'
import MovieCard from './MovieCard'



const MovieList = ({movie,film , rating}) => {
  return (
    <div className='MovieList'>
         {movie.filter((val)=> val.title.toLowerCase().includes(film.toLowerCase()) && val.rating >= rating)
       
       .map((el)=>
       <MovieCard data={el} key={el.id}/>
       )}
    </div>
  )
}

export default MovieList