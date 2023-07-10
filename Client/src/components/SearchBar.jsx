import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './styles/SearchBar.css';
import imBuscar from './styles/imagenes/Buscar.png';
import imgAgrgar from './styles/imagenes/Agregar.png';
import { addChar, next } from '../redux/actions.js';
import axios from "axios";

export default function SearchBar() {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const { allCharacters, numPag } = useSelector((state) => state);
  function handleChange(event) {
    setId(event.target.value);
  }

  function onSearch(id) {
    //`http://localhost:3001/rickandmorty/character/${id}`
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const char = allCharacters?.find((ch) => ch.id === Number(id));
          if (char) return alert("ese characters ya existe");
          dispatch(addChar(data));
          if (numPag === 0) dispatch(next());
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
    setId('');
  }

  return (
    <div className="container">
      <div className='buscar' style={{ backgroundImage: `url(${imBuscar})` }}>
        <input className="input" placeholder='ID..' onChange={handleChange} type='search' name='search' value={id} />
      </div >
      <div className='boton' onClick={() => onSearch(id)}>
        <img className='imgboton' src={imgAgrgar} alt='Agregar'></img>
      </div>
    </div>

  );
}
