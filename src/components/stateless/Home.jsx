import React from 'react'
import { NavLink } from 'react-router-dom'
import foto from './../../Assets/img/foto.png'
import './../../css/Home.css'

const Home = () => {


    return (
        <div className="container-home">
                <h1 className="home-title">BIENVENIDO A PEGASUS COMPUTERS!</h1>  

                <div className="contenedor-catalogo">
                    <img  src={foto} alt="foto"/>
                    <NavLink className="navlink" to='/catalogo'>Catalogo</NavLink>
                </div>
        </div>
    )
}

export default Home
