import React from 'react'
import './../../css/item.css'
import logo from './../../Assets/img/logo.png'

// PRODUCTO UI
const item = (props) => {
    return (
        <div className="container-product">
            <img src={logo} alt="logo" />
            
            <div className="product-img">
                <img src={props.img} alt="foto" />
            </div>

            <div className="product-details">
                <p> {props.marca} {props.pulgadas}' | {props.storage}GB | RAM: {props.ram}GB | {props.procesador}</p>
            </div>

            <div className="product-price">
                <h3>{props.precio}€</h3>
                <p>IVA incluida</p>
            </div>

            <div className="product-btn-carrito">
                <button type="submit">Añadir a la cesta</button>
            </div>
        </div>
    )
}

export default item
