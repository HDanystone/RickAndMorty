import './Card.css'
export default function Card( props) {
   return (
      <div className='contenedor'>        
         <button onClick={props.onClose}>X</button>
         <img src={props.image} alt=''/>
           
      
         <div className='contenedorTexto'>
            <h2 className='texto'>{props.name} </h2>
            <h2 className='texto'>{props.status} </h2>
            <h2 className='texto'>{props.species} </h2>
            <h2 className='texto'>{props.gender} </h2>
            <h2 className='texto'>{props.origin} </h2>
         </div>
      </div>
   );
}
