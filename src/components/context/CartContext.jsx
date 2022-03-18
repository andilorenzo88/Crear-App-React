import React from "react";
import { createContext, useState } from "react"


const CartContext = createContext();


export function CartContextProvider ({children}){

    const [itemsCart, setItemsCart] = useState([]);
    const [total, setTotal] = useState (0);

    const [totalItemsInCart, SetTotalItemInCart] = useState(0);

    const operation = (precio, cantidad)=> precio * cantidad

    function addItem(item, qty) { 

        if (isInCart(item.id)) { // paso 2: en el caso exista el producto en el carrito recorro los elementos para saber el indice
            let index = itemsCart.findIndex( i => i.id === item.id);
            let cloneCart = [...itemsCart]; //paso 3: clono el carrito 
            cloneCart[index].qty += qty;
            setTotal(total + operation(item.precio, qty)) // paso 4: me translado al indice encontrado en el paso 2 y edito el item para agregar la cantidad que le transfiero desde el contador
            setItemsCart(cloneCart)
            SetTotalItemInCart(totalItemsInCart + qty)
        }else{
            const newItemCart = {...item, qty}; // paso 5: en el caso no exista me lo agrega directamente al carrito
            setItemsCart([...itemsCart, newItemCart]);
            setTotal(total + operation(newItemCart.precio, newItemCart.qty)) // paso 4: me translado al indice encontrado en el paso 2 y edito el item para agregar la cantidad que le transfiero desde el contador
            SetTotalItemInCart(totalItemsInCart + newItemCart.qty)
        }
    }

    function isInCart (id){
        return itemsCart.some((product)=> product.id === id)
    }

    function clearCart (){
        setItemsCart([])
        setTotal(0)
    }


    const removeItem = (id)=> {
        if (isInCart(id)) {
            let index = itemsCart.findIndex( i => i.id === id);
            console.log('index', index);
            let cloneCart = [...itemsCart];

            console.log('totalINDEX',itemsCart[index].precio*itemsCart[index].qty);
            let totalIndex = itemsCart[index].precio*itemsCart[index].qty
            setTotal(total - totalIndex)

            cloneCart.splice(index,1);
            setItemsCart(cloneCart);
        }
    }


    const context ={
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