import React from 'react'
import { useContext, useState } from 'react';
import CartContext from './../context/CartContext'
import ItemCount from './ItemCount';

import './../../css/ItemDetails.css'
import { NavLink } from 'react-router-dom';

const ItemDetails = ({product}) => { 

    const {addItem} = useContext(CartContext) // funcionalidad llega del contexto del carrito para darselo al boton 'agregar al carrito'

    const [checkout, setChekout] = useState (false) // // Cuando ItemCount emita un evento onAdd almacenará ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount

    function addToCart(qty) { 
        addItem(product, qty)
        setChekout(true)
    }

    const {img, descripcion, precio, pulgadas, pantalla, resolucion, ram, procesador, nucleos, almacenamiento, capacidad, conexiones, so, autonomia,bateria,peso} = product

    return (
        <div className="container-item-details">

            <div className="preview">

                <div className="img-computer">
                    <img src={(img)} alt= 'foto'/>  
                </div>
                
                <div className="description">
                    <h3>{descripcion}</h3>
                    <h4>{precio} €</h4>
                    {checkout? <div><NavLink to='/carrito'><button className="btn-checkout">Finalizar compra</button></NavLink> <NavLink to='/catalogo'><button className="btn-continue-buy">Seguir comprando</button></NavLink></div>
                    :<ItemCount addToCart={addToCart}/>} 

                </div>

            </div>

            <div className="technical-descript">
                <h2>Especificaciones técnicas</h2>
                <table className="table-technical-desc">
                    <tbody>
                        <tr>
                            <td className="props-tech">Pulgadas</td>
                            <td className="value-props"> {pulgadas}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Pantalla</td>
                            <td className="value-props">{pantalla}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Resolución:</td>
                            <td className="value-props">{resolucion}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">RAM</td>
                            <td className="value-props">{ram}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Procesador</td>
                            <td className="value-props">{procesador}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Nucleos</td>
                            <td className="value-props">{nucleos}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Almacenamiento</td>
                            <td className="value-props">{almacenamiento} {capacidad}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Conexiones</td>
                            <td className="value-props">{conexiones}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Sistema Operativo</td>
                            <td className="value-props">{so}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Autonomia</td>
                            <td className="value-props">{autonomia}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Bateria</td>
                            <td className="value-props">{bateria}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Peso</td>
                            <td className="value-props">{peso}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemDetails
