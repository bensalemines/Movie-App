import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Description = (props) => {
  const params = useParams();
  const movie = props.movie.find(el => el.id === +params.movId);
  
  return (
    <div className="description-page">
    {movie.trailer}
    <p className='desc'>{movie.description}</p>
    <Link to='/'><button className='backHome'>BACK HOME</button></Link>
    </div>
  )
}

export default Description