import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ char, onClose, seteandoTitle }) {
  // obj
  const { id, name, gender, species, origin, image, status } = char;

  
  return (

 
    <div className="card">
       <div className="imagen">
          <div className='close' onClick={() => onClose(id)}>X</div>
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