import React from "react";
import './About.css'
import AboutDeco from './AboutDeco.png'
export default function About() {

    return(
        <div className="About" style={{ backgroundImage:`url(${AboutDeco})` }} >
        <label className="Aboutlbl"> Aplicación web realizada como trabajo práctico integrador de cada una de las temáticas abordadas durante el bootcamp de la carrera de Full Stack Developer.</label>
        
        </div>
    )
    
}