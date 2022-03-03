import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faTruckFast} from "@fortawesome/free-solid-svg-icons";

import './../../css/ItemDetails.css'


const ItemDetails = ({product}) => {


    return (
        <div className="container-item-items">

            <div className="preview">

                <div className="img-computer" >
                    <img src={(product.img)} alt= 'foto'/>  
                </div>
                
                <div className="description">
                    <h3>{product.Title}</h3>
                    <h4>{product.precio} €</h4>
                    <button type="submit">Agregar al carrito <span className="icon-btn-cart"><FontAwesomeIcon icon={faCartArrowDown}/></span></button>
                    <p><FontAwesomeIcon icon={faTruckFast} className="icon-ship"/>Envío gratis </p>

                </div>

            </div>

            <div className="technical-descript">
                <h2>Especificaciones técnicas</h2>
                <table className="table-technical-desc">
                    <tbody>
                        <tr>
                            <td className="props-tech">Pulgadas</td>
                            <td className="value-props"> {product.pulgadas}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Pantalla</td>
                            <td className="value-props">{product.pantalla}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Resolución:</td>
                            <td className="value-props">{product.resolucion}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">RAM</td>
                            <td className="value-props">{product.ram}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Procesador</td>
                            <td className="value-props">{product.procesador}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Nucleos</td>
                            <td className="value-props">{product.nucleos}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Almacenamiento</td>
                            <td className="value-props">{product.almacenamiento} {product.capacidad}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Conexiones</td>
                            <td className="value-props">{product.conexiones}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Sistema Operativo</td>
                            <td className="value-props">{product.so}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Autonomia</td>
                            <td className="value-props">{product.autonomia}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Bateria</td>
                            <td className="value-props">{product.bateria}</td>
                        </tr>
                        <tr>
                            <td className="props-tech">Peso</td>
                            <td className="value-props">{product.peso}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemDetails
