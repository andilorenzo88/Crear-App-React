import Item from './Item';
import './../../css/ItemList.css'
import { useEffect, useState } from 'react';



const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        setTimeout(getProducts, 2000)

    },[])

    const getProducts = () => {

        const request = fetch('./data/products.json')

        request.then(response =>response.json())
            .then(res => {
                console.log(res);
                setProducts(res)
            })
    }
    

    // Recorro arreglo de productos para renderizar en la interfaz
    return (
        <>
            <div className='flex-container-il'> 

                {products.map( p =>{
                    return <Item 
                        key={p.id} 
                        marca={p.marca}
                        pulgadas={p.pulgadas}
                        storage={p.storage}
                        ram={p.ram}
                        precio={p.precio}
                        procesador={p.procesador}
                        img={p.img}
                    />
                })}

            </div>
        </>
    )
}

export default ItemList
