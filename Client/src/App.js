import "./components/styles/App.css";
import background from "./components/styles/imagenes/RyM.png";
import Detail from "./components/Detail.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login";
import Favoritos from "./components/Favoritos.jsx";
import {Routes, Route, useLocation} from 'react-router-dom';
import ErrorNav from './components/ErrorNav'
export default function App() {
const path = useLocation() 

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >   
     {path.pathname.length > 1 ?  <Nav/>  : null}
        <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/Home' element = {<Cards/>}/> 
          <Route path = '/Favoritos' element = {<Favoritos/>}/>
          <Route path = '/About' element = {<About/>}/>
          <Route path = '/detail/:id' element = {<Detail/>}/>
          <Route path = '/*' element = {<ErrorNav/>}/>
        </Routes> 
    </div>
  );
}