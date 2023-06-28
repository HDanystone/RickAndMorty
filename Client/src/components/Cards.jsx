import Card from "./Card";
import './Cards.css'
import imgPrev from './prev.png'
import imgNext from './next.png'
import imgLblPrev from './lblPrev.png'
import imgLblNext from './lblNext.png'
import { useDispatch, useSelector } from "react-redux";
import { prev, next } from "../redux/actions";

export default function Cards({onClose}) {
  const { allCharacters, numPag } = useSelector((state) => state);
  console.log(allCharacters)
  const dispatch = useDispatch();
  const CharPorPag = 5;
  const desde = (numPag - 1) * CharPorPag; 
  const hasta = numPag * CharPorPag; 
  const numPags = Math.ceil(allCharacters.length / CharPorPag);
  console.log(numPags)
  const viewCharacters = allCharacters?.slice(desde, hasta);
  console.log(numPag)
  return (
    <div className="cards">
      <div className="paginado"> 
        <div className="botonContainer"> 
          {numPag <= 1 ? <div className="botones"/> : (
            <div className='botones' style={{ backgroundImage:`url(${imgPrev})` }} 
              onClick={() => dispatch(prev())}/>
              )}
          <div className = 'divLbl' style={{ backgroundImage:`url(${imgLblPrev})` } }> </div>
        </div>
              <h3>{numPag} de {numPags}</h3>
            
        <div className="botonContainer" > 
          <div className = 'divLbl' style={{ backgroundImage:`url(${imgLblNext})` }}> </div>
            {numPag >= numPags ? <div className="botones"/> : (
            <div className='botones' style={{ backgroundImage:`url(${imgNext})` }} 
            onClick={() => dispatch(next())}/>
          )}    
        </div>
      </div>
      {
         viewCharacters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose}/>
         })
      }


    </div>
  );
}