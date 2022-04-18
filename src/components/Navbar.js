import React from 'react'
import AddMovie from './AddMovie'
import logo from './logo.svg'
import StarsRating from './StarsRating'
const Navbar = ({SearchT,addFilm , SearchR}) => {
  return (
    <div className='head' >
        <navbar className='Nav'>
          <img className='Logo' src={logo} alt='logo'/>
           <input className='search'type='search' placeholder='search...' onChange={SearchT}></input>
           <StarsRating searchR={SearchR}/>
           <div className='ADDM'>
           <AddMovie addFilm={addFilm} />
           </div> 
           
        </navbar>
    </div>
  )
}

export default Navbar