import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import {addFav, removeChar, removeFav}from '../redux/actions.js'
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
function Card({ char, onClose, seteandoTitle, addFav, removeFav, myFavorites }) {

  const { id, name, gender, species, origin, image, status } = char;

  const [isFav, setIsFav] = useState(false)
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(char)
      }
   }
   const dispatch = useDispatch()
const Close=(id)=>{
   return dispatch(removeChar(id), removeFav(id))
   
}
    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === char.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

  return (

 
    <div className="card">
       <div className="imagen">
       {
         isFav ? (
      <button className='btnFav' onClick={handleFavorite}>❤️</button>
         ) : (
      <button className='btnFav' onClick={handleFavorite}>🤍</button>
         )
      }
          <div className='close' onClick={() => Close(id)}>X</div>
          <img className ='imgag' src={image} alt={name} />
       </div>
       <Link to = {`/detail/${id}`} >
       <div className="info">
          <h2> {name}</h2>  
          <h2>{status}</h2>
          <h2> {species}</h2>
          <h2>{gender}</h2>
         <h2>{origin?.name.slice(0,origin?.name.indexOf(' '))}</h2>           
      </div>
     </Link>
    </div>
 
  );
}
function mapDispatchToProps(dispatch) {
   return {addFav : (char)=>{
      dispatch(addFav(char))},
      removeFav : (id)=>{
         dispatch(removeFav(id))
 }
   }
}

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);