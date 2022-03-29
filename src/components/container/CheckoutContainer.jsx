import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import CheckoutForm from './CheckoutForm';
import { collection, addDoc } from "firebase/firestore";
import db from './../../firebase/firabaseClient'
import TrackingId from '../stateless/TrackingId';


const CheckoutContainer = () => {

    //Context
    const {total, itemsCart, totalItemsInCart, clearCart} = useContext(CartContext)

    //Hooks
    const [userData, setUserData] = useState({});
    const [trackingId, setTrackingId] = useState(false)

    //Functions
    const handlerInput =(e)=> {

        setUserData( { ...userData,[e.target.name] : e.target.value }) 
        console.log(userData);
    }

    const handlerSubmit = (e) => { 
        e.preventDefault();

        const addOrder = addDoc(collection(db, 'orders'), {
            user: {
                shipmentInfo:{
                    address: userData.direccion,
                    name: userData.name,
                    surname: userData.apellido,
                    city: userData.ciudad,
                    cp: userData.cp,
                },
                phone: userData.tel,
                email: userData.email
            },
            purchaseDetail: {
                item: itemsCart,
                total: total,
                TotalQty: totalItemsInCart
            }
        });

            addOrder.then(data => {
                console.log('ID orden: ',data.id)
                setTrackingId(data.id);
                clearCart();
            })
    }

    return (
        <div className="details-user">
            {trackingId? <TrackingId trackingId={trackingId} userData= {userData}/> 
            :
            <CheckoutForm  handlerInput={handlerInput} total={total} itemsCart={itemsCart} handlerSubmit={handlerSubmit}/>}
        </div>
    )
}

export default CheckoutContainer
