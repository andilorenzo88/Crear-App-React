import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWrench} from "@fortawesome/free-solid-svg-icons";

const styles = {
    color:"red"
}

const CartContainer = () => {
    return (
        <div>
            <h1> <FontAwesomeIcon icon={faWrench}/> En construcción ... <span style={styles}>carrito</span></h1>
        </div>
    )
}

export default CartContainer
