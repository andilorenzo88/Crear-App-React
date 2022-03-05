import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faTruckFast} from "@fortawesome/free-solid-svg-icons";

import './../../css/ItemDetails.css'


const ItemDetails = ({product}) => {

    const {img, descripcion, precio, pulgadas, pantalla, resolucion, ram, procesador, nucleos, almacenamiento, capacidad, conexiones, so, autonomia,bateria,peso} = product

    return (
        <div className="container-item-items">

            <div className="preview">

                <div className="img-computer" >
                    <img src={(img)} alt= 'foto'/>  
                </div>
                
                <div className="description">
                    <h3>{descripcion}</h3>
                    <h4>{precio} €</h4>
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
