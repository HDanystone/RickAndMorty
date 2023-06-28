import React from 'react';
import './Nav.css'
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom'
import imHome from './Home.png'
import imFavoritos from './Favoritos.png'
import imLogout from './Logout.png'
import imAbout from './About.png'
export default function Nav( {onSearch}) {
   return (
      <div className='nav'>
            
         <Link to = "/Home"><img className='imgenNav' src = {imHome}></img></Link>
         <Link to = "/Favoritos"><img className='imgenNav' src = {imFavoritos}></img></Link>
         <SearchBar onSearch={onSearch} />    
         <Link to = "/"><img className='imgenNav' src = {imLogout}></img></Link>
         <Link to = "/About"><img className='imgenNav' src = {imAbout}></img></Link>
         
      </div>
   );
}
