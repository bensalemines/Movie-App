import React from 'react';
const MovieCard = (props) => {
  return (
    <div className='MovieCard'>
      
<div class="card">
  <a href="a">
    <div class="img1" style={{ 
       backgroundImage: `url(${props.data.imgLink})`}}></div>
    <div class="img2"style={{backgroundImage: `url(${props.data.imgLink})`}}></div>
    <div class="title">
    <h1>{props.data.title}</h1>
    </div>
    <div class="description"><p>{props.data.description}</p></div>
    <a href="a"><div class="catagory">{props.data.category}</div></a>
    <a href="a"><div class="rating">{props.data.rating} 
    <i className="bi bi-star-fill" />
    </div></a>
  </a>
</div>

    </div>
  )
}

export default MovieCard;