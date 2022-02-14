import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";

import React from 'react'

const CartWidget = () => {
    return (

        <div className='cart'>
            <a href="#" style={{color:'black'}}>
            <FontAwesomeIcon icon={faCartArrowDown} />
            </a>
        </div>
    )
}

export default CartWidget

