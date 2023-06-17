
import React, { useState } from "react";
import  './SearchBar.css'
import imBuscar from './Buscar.png'
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   function handleChange(event){ setId(event.target.value)}
  
   return (
      <div className = "container" style={{ backgroundImage:`url(${imBuscar})` }}>       

          <div className='boton' onClick={()=>onSearch(id)}>  </div>
          <input className="input" placeholder ='ID..' onChange= {handleChange} type='search' name='search' value={id}/>
      </div>
   );
}
