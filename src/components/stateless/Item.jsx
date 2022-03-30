import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import logo from './../../Assets/img/logo.png'

import './../../css/ItemList.css'

// PRODUCTO UI
const Item = ({p}) => {
    const {img, marca,pulgadas,capacidad,ram, procesador, precio} = p
    return (
        <div className="container-product">
            <img src={logo} alt="logo" />
            
            <div className="product-img">
                <img src={img} alt="foto" />
            </div>

            <div className="product-details">
                <p> {marca} {pulgadas}' | {capacidad}GB | RAM: {ram}GB | {procesador}</p>
            </div>

            <div className="product-price">
                <h3>{precio}€</h3>
                <p>IVA incluida</p>
            </div>

            <div className="product-btn-carrito">
                <NavLink to={`/producto/${p.id}`}>Ver detalle <FontAwesomeIcon icon={faEye} className="icon-eye"/></NavLink>
            </div>
        </div>        
    )
}

export default Item
