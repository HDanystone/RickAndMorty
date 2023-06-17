import { useEffect, useState } from "react";
import "./App.css";
import background from "./components/RyM.png";
import Detail from "./components/Detail.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login";
import axios from "axios";
import {Routes, Route, Link, useLocation} from 'react-router-dom';
function App() {

  const [characters, setCharacters] = useState([]);
  //console.log(characters)

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
         const char = characters.find((ch)=> ch.id === Number(id))
         if(char) return alert("ese characters ya existe")
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    const newCharacters = characters.filter((ch) => ch.id !== Number(id));
    setCharacters(newCharacters);
  }

const path = useLocation()
console.log(path) 
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >
   
     {path.pathname.length > 1 ?
    <Nav onSearch={onSearch} />
          : null}
      <Link to ='/Home'><button>Home</button></Link>
        <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/Home' element = {<Cards characters={characters} onClose={onClose} />}/>
          <Route path = '/About' element = {<About/>}/>
          <Route path = '/detail/:id' element = {<Detail/>}/>
        </Routes> 

    </div>
  );
}

export default App;