import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import './../../css/CartDetail.css'


const CartDetail = ({item}) => {
    const {img, descripcion, precio, qty, id} = item

    const {removeItem} = useContext(CartContext)

    return (
        
        <div className="container-cart">
            <div className="container-cart_detail">
                { <div className="img-prd-cart">
                    <img src={img} alt="foto" />
                </div> }
                <div className="cart-prd-detail">
                    <div className="title-prd-detail">{descripcion}</div>
                    <div className="qty-prd">
                        <p>Cantidad: {qty} </p>
                    </div>
                    <div className="clear-prd">
                        <p onClick={()=>removeItem(id)}>Eliminar</p>
                    </div>
                </div>
            <div className="unit-price">
                <h3> Precio: €{precio}</h3>
            </div>
            </div>
        </div>
    )
}

export default CartDetail