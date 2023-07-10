import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './styles/Detail.css';

//http://localhost:3001/rickandmorty/character/${id}
export default function Detail() {
   const { id } = useParams();
   const [character, setCharacter] = useState({});
   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return (
      <div className="detailCard">

         <div className="detailImagen">

            <img className='detailImg' src={character.image} alt={character.name} />
         </div>
         <div className="detailInfo">
            <h2>Nombre: {character.name}</h2>
            <h2>Domicilio: {character.location?.name}</h2>
            <h2>Estado: {character.status}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Género: {character.gender}</h2>
            <h2>Origen: {character.origin?.name}</h2>
            <h2>Episodios: {character.episode?.length}</h2>
         </div>
      </div>
   )
}
//        