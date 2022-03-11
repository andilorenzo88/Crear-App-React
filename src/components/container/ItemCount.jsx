import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faTruckFast} from "@fortawesome/free-solid-svg-icons";




const ItemCount = ({addToCart}) => {

    const [count, setCount] = useState(1)

    const changeQty = (num) => setCount(count + num)
    
    return (
        <div>
            <div className="contenedor-contador">
                <button onClick={()=>{changeQty(-1)}} disabled={count ==1}>-</button>
                <div>{count}</div>
                <button onClick={()=>{changeQty(1)}}>+</button>
            </div>     
            <div className="contenedor-btn-cart">
                <button className ="btn-cart" type="submit" onClick={()=>addToCart(count)}>Agregar al carrito <span className="icon-btn-cart"><FontAwesomeIcon icon={faCartArrowDown}/></span></button>
                <p><FontAwesomeIcon icon={faTruckFast} className="icon-ship"/>Envío gratis </p>
            </div>
        </div>
    )
}

export default ItemCount
