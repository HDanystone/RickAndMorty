import { useEffect, useState } from "react";
import Card from "./Card.jsx"
import Cards from './Cards.jsx'
import './Cards.css'
import { orderCards, filterCards } from "../redux/actions.js";
import { connect, useDispatch, UseDispatch } from 'react-redux';
import { removeFav } from "../redux/actions.js";

function Favoritos({myFavorites, onClose, removeFav}){

const dispatch = useDispatch()
const handleOrder= (event)=>{
   const {value}= event.target

dispatch (orderCards(value))
   setAux(true)
}
 const handleFilter = (event)=>{
   const {value}= event.target
   dispatch (filterCards(value))
 }
const [aux, setAux] = useState(false)
    return(
<div className="cards">
         <select name= {'Orden'} onChange={handleOrder}>
            <option value= {'A'}>Ascendente</option>
            <option value ={'D'}>Descendente</option>
         </select>
         <select name ={'Genero'} onChange={handleFilter}>
            <option value= {'Male'}>Varon</option>
            <option value ={'Female'}>Mujer</option>
            <option value= {'Genderless'}>No binario</option>
            <option value ={'Dunknown'}>Desconocido</option>
         </select>
      {
         myFavorites?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose}></Card> 
         })
      }
    </div>)
}
function mapStateToProps(state){
    return {
       myFavorites: state.myFavorites
    }
 }

 function mapDispatchToProps(dispatch) {
    return {
        removeFav : (id)=>{
            dispatch(removeFav(Number(id)))
    }
 }
}
 
 export default connect(mapStateToProps)(Favoritos);