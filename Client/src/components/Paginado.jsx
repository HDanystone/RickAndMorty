import React from 'react';
import imgPrev from './styles/imagenes/prev.png';
import imgNext from './styles/imagenes/next.png';
import './styles/Cards.css';
import { useDispatch } from "react-redux";
import { prev, next, orderCards, filterCards, favPrev, favNext } from "../redux/actions";


export default function Paginado({ numPag, numPags, container }) {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const { value } = event.target;
    dispatch(orderCards(value));
  }

  const handleFilter = (event) => {
    const { value } = event.target;
    dispatch(filterCards(value));
  }
  return (

    <div className="paginado">
      <div className="botonContainer">
        <label className='pag'>Ordenar</label>
        <select name={'Orden'} disabled={container !== 'favoritos'} onChange={handleOrder}>
          <option value={''}> </option>
          <option value={'A'}>Ascendente</option>
          <option value={'D'}>Descendente</option>
        </select>
      </div>
      <div className="divCenter">

        {numPag <= 1 ? <div className="botones" /> : (
          <div className='botones' style={{ backgroundImage: `url(${imgPrev})` }}
            onClick={() => dispatch(container === 'favoritos' ? favPrev() : prev())} />
        )}

        <label className='pag'>Página {numPag} de {numPags}</label>

        {numPag >= numPags ? <div className="botones" /> : (
          <div className='botones' style={{ backgroundImage: `url(${imgNext})` }}
            onClick={() => dispatch(container === 'favoritos' ? favNext() : next())} />
        )}
      </div>

      <div className="botonContainer" >
        <select name={'Genero'} disabled={container !== 'favoritos'} onChange={handleFilter}>
          <option value={''}> </option>
          <option value={'Male'}>Varon</option>
          <option value={'Female'}>Mujer</option>
          <option value={'Genderless'}>No binario</option>
          <option value={'unknown'}>Desconocido</option>
        </select>
        <label className='pag'>Filtrar</label>
      </div>
    </div>

  )
}