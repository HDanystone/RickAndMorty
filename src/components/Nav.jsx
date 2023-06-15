import React from 'react';
import './Nav.css'
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom'

export default function Nav( {onSearch}) {
   return (
      <div className='nav'> 
      <Link to = "/About">About</Link>
      <Link to = "/">Home</Link>
      
        <SearchBar onSearch={onSearch} />        
      </div>
   );
}
