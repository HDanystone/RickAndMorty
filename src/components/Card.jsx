import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ char, onClose, seteandoTitle }) {
  // obj
  const { id, name, gender, species, origin, image, status } = char;

  useEffect(() => {
    seteandoTitle("jujuuu el component Card se ha montado y ya hemos iniciado");
  }, []); // Mount

  useEffect(() => {
    return function(){
      seteandoTitle("bye bye nos hemos desmontado");
    };
  },[]); // willMount
  
  return (

 <Link to = {`/detail/${id}`} >
    <div className="card">       
       <div className="imagen">
          <div className='close' onClick={() => onClose(id)}>X</div>
          <img className ='img' src={image} alt={name} />
       </div>        
       <div className="info">        
          <h2> {name}</h2>  
          <h2>{status}</h2>
          <h2> {species}</h2>
          <h2>{gender}</h2>
         <h2>{origin?.name.slice(0,origin?.name.indexOf(' '))}</h2>           
      </div>     
    </div>
  </Link>
  );
}