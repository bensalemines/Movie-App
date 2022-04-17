import React from 'react'
import AddMovie from './AddMovie'
import logo from './logo.svg'
const Navbar = ({SearchT,addFilm}) => {
  return (
    <div className='head' >
        <navbar className='Nav'>
            <img className='Logo' src={logo} alt='logo'/>
            <div className='pages'>
            <a href="a">HOME</a>
            <a href="a">MOVIES</a>
            <a href="a">SERIES</a>
            </div>
          <form className='rightSide'>
           <input className='search'type='search' placeholder='search...' onChange={SearchT}></input>
           <AddMovie addFilm={addFilm} /> 
           </form>
        </navbar>
    </div>
  )
}

export default Navbar