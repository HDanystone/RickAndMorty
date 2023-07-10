import React from "react";
import './styles/About.css'
import AboutDeco from './styles/imagenes/AboutDeco.png'
export default function About() {

    return (
        <div className="About" style={{ backgroundImage: `url(${AboutDeco})` }} >
            <label className="a"> Acerca de:...</label>
            <label className="Aboutlbl t"> Aplicación web realizada como trabajo práctico integrador de cada una de las temáticas abordadas durante el bootcamp de la carrera de Full Stack Developer.</label>
            <label className="b"> Hugo Daniel Hernández.</label>
        </div>
    )

}