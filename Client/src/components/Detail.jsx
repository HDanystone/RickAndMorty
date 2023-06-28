import React from "react";
import axios from "axios";
import { useState,  useEffect} from "react";
import { useParams } from "react-router-dom";

//https://rickandmortyapi.com/api/character/${id}
export default function Detail(){
    const { id } = useParams();
const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
       <div className="card">
      
       <div className="imagen">

          <img className ='img' src={character.image} alt={character.name} />
       </div>
      <div className="info">     
         <h2> {character.name}</h2>    
         <h2>{character.status}</h2>
         <h2> {character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin?.name}</h2>
      </div>
    </div>
    )
}