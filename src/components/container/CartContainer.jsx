import React, {useContext} from 'react'
import CartContext from '../context/CartContext';
import CartDetail from './CartDetail';
import { NavLink } from 'react-router-dom';
import './../../css/CartDetail.css'


const styles = {  
    boxShadow: "1px 1px 3px black",
    width:"90%",
    margin:"50px auto"
}

const CartContainer = () => {

    const {itemsCart, total, clearCart} = useContext(CartContext)

    console.log('Carrito', itemsCart);
    console.log('Total Amount = ', total);

    return (
        <div className="tienda">
            <h1 style={styles}>CARRITO DE COMPRA</h1>

            {itemsCart.length === 0? 
            <p className="cart-empty">Tu carrito esta vacio...</p>
            :
            itemsCart.map((item)=> {
                return <CartDetail key={item.id} item={item}/>
            })}

            <div className="container-cart_subtotal">
                <div className='div-subtotal'>
                    <h3>Total a pagar</h3>
                    <h3>€ {total}</h3>
                </div>
                <div className="botones-carrito">
                    <NavLink to='/checkout'className="btn-finalizar">Finalizar compra</NavLink>
                    <NavLink to='/catalogo' className="btn-continue-shop">Continuar comprando</NavLink>
                    <button onClick={clearCart} className="clear-cart" >Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer
