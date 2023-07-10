import Card from "./Card.jsx";
import './styles/Cards.css';
import { useSelector, useDispatch } from 'react-redux';
import Paginado from "./Paginado";
import { favNext, favPrev } from "../redux/actions.js";

export default function Favoritos() {
   const dispatch = useDispatch();
   const { myFavorites, favNumPag } = useSelector((state) => state);
   const CharPorPag = 5;
   const desde = (favNumPag - 1) * CharPorPag;
   const hasta = favNumPag * CharPorPag;
   const numPags = Math.ceil(myFavorites.length / CharPorPag);
   if (numPags < favNumPag) dispatch(favPrev());
   if (favNumPag === 0 && myFavorites.length > 0) dispatch(favNext());
   const viewCharacters = myFavorites?.slice(desde, hasta);

   return (
      <div className="cards">
         <Paginado numPag={favNumPag} numPags={numPags} container={'favoritos'} />
         {
            viewCharacters?.map((char, index) => {
               return <Card key={char.id} char={char}></Card>
            })
         }
      </div>)
}
