import React from 'react'
import MovieCard from './MovieCard'
import data from './data'

const MovieList = ({film}) => {
  return (
    <div className='MovieList'>
         {data.filter((val)=> val.title.toLowerCase().includes(film.toLowerCase()))
       
       .map((el)=><MovieCard data={el} key={el.id}/>)}
    </div>
  )
}

export default MovieList