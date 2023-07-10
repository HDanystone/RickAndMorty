import Card from "./Card";
import './styles/Cards.css';
import { useSelector, useDispatch } from "react-redux";
import Paginado from "./Paginado";
import { prev } from '../redux/actions.js';
export default function Cards() {
  const dispatch = useDispatch();
  const { allCharacters, numPag } = useSelector((state) => state);


  const CharPorPag = 5;
  const desde = (numPag - 1) * CharPorPag;
  const hasta = numPag * CharPorPag;
  const numPags = Math.ceil(allCharacters.length / CharPorPag);
  const viewCharacters = allCharacters?.slice(desde, hasta);
  if (numPags < numPag) dispatch(prev());
  return (
    <div className="cards">
      <Paginado numPag={numPag} numPags={numPags} />
      {
        viewCharacters?.map((char, index) => {
          return <Card key={char.id} char={char} />
        })
      }
    </div>
  );
}