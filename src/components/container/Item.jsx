import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import logo from './../../Assets/img/logo.png'

import './../../css/item.css'

// PRODUCTO UI
const Item = ({p}) => {
    const {img, marca,pulgadas,storage,RAM, procesador, precio} = p
    return (
        <div className="container-product">
            <img src={logo} alt="logo" />
            
            <div className="product-img">
                <img src={p.img} alt="foto" />
            </div>

            <div className="product-details">
                <p> {p.marca} {p.pulgadas}' | {p.storage}GB | RAM: {p.RAM}GB | {p.procesador}</p>
            </div>

            <div className="product-price">
                <h3>{p.precio}€</h3>
                <p>IVA incluida</p>
            </div>

            <div className="product-btn-carrito">
                <NavLink to={`/producto/${p.id}`}>Ver detalle <FontAwesomeIcon icon={faEye} className="icon-eye"/></NavLink>
            </div>
        </div>        
    )
}

export default Item
