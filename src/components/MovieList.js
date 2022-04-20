import React from 'react'
import MovieCard from './MovieCard'
import { Link} from 'react-router-dom'


const MovieList = ({movie,film , rating}) => {
  return (
    <div className='MovieList'>
         {movie.filter((val)=> val.title.toLowerCase().includes(film.toLowerCase()) && val.rating >= rating)
       
       .map((el)=>
       <div >
       <Link to={`/description/${el.id}`}> <MovieCard data={el} key={el.id}/> </Link>
       </div>)}
    </div>
  )
}

export default MovieList