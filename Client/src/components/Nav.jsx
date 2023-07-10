import React from 'react';
import './styles/Nav.css';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import imHome from './styles/imagenes/Home.png';
import imFavoritos from './styles/imagenes/Favoritos.png';
import imLogout from './styles/imagenes/Logout.png';
import imAbout from './styles/imagenes/About.png';
export default function Nav({ onSearch }) {
   return (
      <div className='nav'>
         <Link to="/Home"><img className='imgenNav' src={imHome} alt='Home'></img></Link>
         <Link to="/Favoritos"><img className='imgenNav' src={imFavoritos} alt='Favoritos'></img></Link>
         <SearchBar onSearch={onSearch} />
         <Link to="/"><img className='imgenNav' src={imLogout} alt='Logout'></img></Link>
         <Link to="/About"><img className='imgenNav' src={imAbout} alt='About'></img></Link>
      </div>
   );
}
