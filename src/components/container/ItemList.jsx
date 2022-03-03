import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';

import './../../css/ItemList.css'
import Spinner from '../utilities/Spinner';



const ItemList = () => {

    const [products, setProducts] = useState([]);
    const [spinner, showSpinner] = useState(true)


    useEffect(()=>{

        setTimeout(getProducts, 2000)
    },[])

    const getProducts = () => {

        const request = fetch('/data/products.json')

        request.then(response =>response.json())
            .then(res => {
                console.log(res);
                setProducts(res)
                showSpinner(false)
            })
    }
    

    // Recorro arreglo de productos para renderizar en la interfaz
    return (
        <>
            <div className="spinner">{spinner!=false? <Spinner/>: false}</div>
            
            <div className='flex-container-il'> 
                {products.map( p =>{
                    return <Item 
                        key={p.id} 
                        p={p}
                    />
                })}
            </div>
        </>
    )
}

export default ItemList
