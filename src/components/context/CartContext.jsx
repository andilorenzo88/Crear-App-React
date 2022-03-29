import React from "react";
import { createContext, useState } from "react"


const CartContext = createContext();


export function CartContextProvider ({children}){

    const [itemsCart, setItemsCart] = useState([]);
    const [total, setTotal] = useState (0);

    const [totalItemsInCart, SetTotalItemInCart] = useState(0);


    const calc = (precio, cantidad)=> precio * cantidad

     // Paso 1: Se recorre el carrito para obtener resultado booleano
     function isInCart (id){ 
        return itemsCart.some((product)=> product.id === id)
    }

    function addItem(item, qty) { 

        // Paso 2: En el caso exista el producto se recorre nuevamente ek arreglo para identificar el index
        if (isInCart(item.id)) { 
            let index = itemsCart.findIndex( i => i.id === item.id);
            //Paso 3: Clonar carrito y ubicarse en el index encontrado para sumar cantidad
            let cloneCart = [...itemsCart]; 
            cloneCart[index].qty += qty;
            //Paso 4: Actualizar total, carrito y cantidades totales
            setTotal(total + calc(item.precio, qty)) 
            setItemsCart(cloneCart)
            SetTotalItemInCart(totalItemsInCart + qty)
        }else{
            // paso 5: en el caso no exista el producto se agregar 'qty' como nueva prop y se actualiza el estado del carrito, total y cantidades
            const newItemCart = {...item, qty}; 
            console.log('New item in Cart: ',newItemCart);
            setItemsCart([...itemsCart, newItemCart]);
            setTotal(total + calc(newItemCart.precio, newItemCart.qty))
            SetTotalItemInCart(totalItemsInCart + newItemCart.qty)
        }
    }

    function removeItem (id) {

        if (isInCart(id)) {
            let index = itemsCart.findIndex( i => i.id === id);
            
            console.log('Importe a descontar = ',itemsCart[index].precio*itemsCart[index].qty);
            let totalIndex = itemsCart[index].precio*itemsCart[index].qty
            setTotal(total - totalIndex)
            SetTotalItemInCart(totalItemsInCart - itemsCart[index].qty)

            let cloneCart = [...itemsCart];
            cloneCart.splice(index,1);
            setItemsCart(cloneCart);
        }
    }

    function clearCart (){
        setItemsCart([])
        setTotal(0)
        SetTotalItemInCart(0)
    }

    
    const context = {
        addItem: addItem, 
        clearCart: clearCart,
        itemsCart: itemsCart,
        total: total,
        removeItem: removeItem,
        totalItemsInCart: totalItemsInCart
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;