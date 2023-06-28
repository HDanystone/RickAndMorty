import { useEffect, useState } from "react";
import "./App.css";
import background from "./components/RyM.png";
import Detail from "./components/Detail.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login";
import Favoritos from "./components/Favoritos.jsx";
import axios from "axios";
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFav } from "./redux/actions";
import ErrorNav from './components/ErrorNav'
function App() {

 // const [characters, setCharacters] = useState([]);
  //console.log(characters)

  //  Iba como PROPS en Cards-->characters={characters}

  function onClose(id) {
    console.log('close')
    console.log('close', removeFav)
   
    //const newCharacters = characters.filter((ch) => ch.id !== Number(id));
    //setCharacters(newCharacters);
    
  }

  const path = useLocation()
//console.log(path) 
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >   
     {path.pathname.length > 1 ?  <Nav/>  : null}
        <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/Home' element = {<Cards  onClose={onClose} />}/> 
          <Route path = '/Favoritos' element = {<Favoritos onClose={onClose}/>}/>
          <Route path = '/About' element = {<About/>}/>
          <Route path = '/detail/:id' element = {<Detail/>}/>
          <Route path = '/*' element = {<ErrorNav/>}/>
        </Routes> 
    </div>
  );
}

export default App;