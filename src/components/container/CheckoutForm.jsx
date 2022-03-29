import React from 'react'
import CheckoutWidget from '../stateless/CheckoutWidget'
import './../../css/Checkout.css'



const CheckoutForm = ({handlerInput, itemsCart, total, handlerSubmit}) => {


    const freeShipping = 0
    
    return (
        <>
            <form className="form-details" onSubmit={handlerSubmit}>
                <h3 className='form-details-title'>Datos de envío</h3>
                <p>Por favor, complete los siguientes datos para realizar la compra:</p>
                <div className="input-name">
                    <input type="text" placeholder='Nombre' name='name' required autoFocus onChange={handlerInput}/>
                    <input type="text" placeholder='Apellido' name='apellido' required onChange={handlerInput}/>
                </div>
                <div className="input-address">
                    <input type="text" placeholder='Dirección' name='direccion' required onChange={handlerInput}/>
                </div>
                <div className="input-city">
                    <input type="text" placeholder='Ciudad' name='ciudad'required  onChange={handlerInput}/>
                </div>
                <div className="input-cp">
                    <input type="number" placeholder='Codigo postal' name='cp' required onChange={handlerInput}/>
                </div>
                <div className="input-email">
                    <input type="email" placeholder='Correo electronico' name='email' required onChange={handlerInput}/>
                </div>
                <div className="input-phone">
                    <input type="number" placeholder='Telefono celular' name='tel' required onChange={handlerInput}/>
                </div>
                <button type='submit'className='btn-comprar'>Comprar</button>
            </form> 

            <form className="resume">
                <h3>Resumen del pedido</h3>
                <div className=" item-resume detail-products">
                    {itemsCart.map(data=> <CheckoutWidget key={data.id} item={data}/>)}
                </div>
                <div className="item-resume shipping">
                    <p>Envío gratuito:</p>
                    <p>€ {freeShipping}</p>
                </div>
                <div className="item-resume total-amount">
                    <p>Importe total:</p>
                    <p>€ {total}</p>
                </div>
            </form>

        </>
    )
}

export default CheckoutForm
