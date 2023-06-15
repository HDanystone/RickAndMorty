import { useEffect, useState } from "react";
import "./App.css";
import background from "./components/RyM.png";
import Detail from "./components/Detail.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import {Routes, Route} from 'react-router-dom';
function App() {
  const [characters, setCharacters] = useState([]);
  //console.log(characters)
  const [title, setTitle]= useState("Bienvenidos")
  const seteandoTitle = (str)=>{
    setTitle(str)
  }

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

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >
   
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Home' element = {<Cards/>}/>
        <Route path = '/About' element = {<About/>}/>
        <Route path = '/detail/:id' element = {<Detail/>}/>
      </Routes>
      <Cards characters={characters} onClose={onClose} seteandoTitle={seteandoTitle} />
      
    </div>
  );
}

export default App;