import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from 'react'
import CartContext from "../context/CartContext";

// Estilos BadgeCart
const cart = {
    position:'relative'
}

const badgeCart = {
    background: 'orange',
    color: 'white',
    borderRadius: '50px',
    position:'absolute',
    top:0,
    right:0,
    marginTop: 5,
    fontSize:'1rem',
    height:'1.rem',
    width:'1rem',
    textAlign: 'center'
}



const CartWidget = () => {

    const {totalItemsInCart} = useContext(CartContext)


    return (

        <div  style={cart} className='cart'>
            <a href="#" style={{color:'black'}}>
            <FontAwesomeIcon icon={faCartArrowDown} />
            </a>
            <div style={badgeCart}>{totalItemsInCart}</div>
        </div>
    )
}

export default CartWidget

