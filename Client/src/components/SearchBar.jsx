
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  './SearchBar.css'
import imBuscar from './Buscar.png'
import imgAgrgar from './Agregar.png'
import {addChar} from '../redux/actions.js'
import axios from "axios";

export default function SearchBar() {
  const [id, setId] = useState('')
  const dispatch = useDispatch()
  const allCharacters = useSelector((state) => state.allCharacters)
  function handleChange(event){ setId(event.target.value)}
  
  function onSearch(id) {    
    //`https://rickandmortyapi.com/api/character/${id}`
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          console.log('data: ',data)
          if (data.name) {
           const char = allCharacters?.find((ch)=> ch.id === Number(id))
           if(char) return alert("ese characters ya existe")
            dispatch(addChar(data));
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
      
    }

   return (
      <div className = "container">                
          <div className='buscar' style={{ backgroundImage:`url(${imBuscar})` }}>
            <input className="input" placeholder ='ID..' onChange= {handleChange} type='search' name='search' value={id}/>
         </div >
         <div className='boton' onClick={()=>onSearch(id)}>
            <img className='imgboton'  src = {imgAgrgar} ></img>
         </div>
      </div>

   );
}
