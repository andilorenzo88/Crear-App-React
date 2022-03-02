import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/img/logo.png'
import CartWidget from './CartWidget'




const Navbar = () => {
  return (
    <section className="navbar">  
      <div className="header">
        <NavLink to="/"><img className="icono-pegaso" src={logo} alt="logo"/></NavLink>
        <h1 className="title-app">TechnoPegasus</h1>
      </div>
        <div className="navbar-container">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/productos'>Productos</NavLink>
          <NavLink to='/location'>Donde Estamos</NavLink>
          <NavLink to='/contact'>Contacto</NavLink>
          <NavLink to='/carrito'><CartWidget/></NavLink>
        </div> 
    </section>
  )
}

export default Navbar



