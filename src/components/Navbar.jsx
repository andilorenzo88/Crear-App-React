import React from 'react'
import logo from '../Assets/img/logo.png'
import CartWidget from './CartWidget'




const Navbar = () => {
  return (
    <section className="navbar">  
      <div className="header">
        <img className="icono-pegaso" src={logo} alt="logo"/>
        <h1 className="title-app">PegasusComputers</h1>
      </div>
        <div className="navbar-container">
          <a href="#">Inicio</a>
          <a href="#">Quienes somos</a>
          <a href="#">Donde estamos</a>
          <a href="#">Contacto</a> 
          <CartWidget/>
        </div> 
    </section>
  )
}

export default Navbar



