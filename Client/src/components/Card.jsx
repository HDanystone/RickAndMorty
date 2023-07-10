import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Card.css";
import { addFav, favNext, removeChar, removeFav } from '../redux/actions.js';
import { useDispatch, useSelector } from "react-redux";

export default function Card({ char }) {
   const dispatch = useDispatch();
   const { id, name, gender, species, origin, image, status } = char;
   const { favNumPag, myFavorites } = useSelector((state) => state);
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav(char));
         if (favNumPag === 0) dispatch(favNext());
      }
   }

   const Close = (id) => {
      return (dispatch(removeChar(id)), dispatch(removeFav(id)));

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
                  <div className='btnFav' onClick={handleFavorite}>❤️</div>
               ) : (
                  <div className='btnFav' onClick={handleFavorite}>🤍</div>
               )
            }
            <div className='close' onClick={() => Close(id)}>X</div>
            <img className='imgag' src={image} alt={name} />
         </div>
         <Link to={`/detail/${id}`} >
            <div className="info">
               <h2> {name}</h2>
               <h2>{status}</h2>
               <h2> {species}</h2>
               <h2>{gender}</h2>
               <h2>{origin?.name.slice(0, origin?.name.indexOf(' '))}</h2>
            </div>
         </Link>
      </div>

   );
}
