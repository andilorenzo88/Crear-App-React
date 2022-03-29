import React from 'react'
import './../../css/Checkout.css'
const CheckoutWidget = ({item}) => {

    const {img, categoria, marca, pulgadas, ram, capacidad, qty} = item
    
    return (
            <div className='detail-checkout'>
                <img className='img-checkout' src={img} alt="foto" /> <span className='total-items-in-cart'>{qty}</span>
                <p>{categoria} - {marca} - {pulgadas}'' - RAM: {ram}GB - {capacidad}GB </p>
            </div>
    )
}

export default CheckoutWidget
