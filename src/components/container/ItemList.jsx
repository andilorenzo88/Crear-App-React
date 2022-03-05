import React from 'react';
import { useEffect, useState } from 'react';

import Item from './Item';
import Filters from '../stateless/Filters';
import Spinner from '../stateless/Spinner';
import './../../css/ItemList.css'



const ItemList = () => {

    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const [spinner, setSpinner] = useState(true)

    console.log(filters);

    useEffect(()=>{

        setTimeout(getProducts, 2000)
    },[])

    const getProducts = () => {

        const request = fetch('/data/products.json')

        request.then(response =>response.json())
            .then(res => {
                console.log(res);
                setProducts(res);
                setSpinner(false)
            })
    }
    const filterCategory = (e)=> {

        const search = e.target.value
        console.log(search);
        setFilters(products.filter(cat => cat.categoria === search))
    }
    const filterBrand = (e)=> {
        
        return setFilters(products.filter(brand => brand.marca === e.target.value))
    }
    const filterRam = (e)=> {

        const search = e.target.value
        console.log(search);
        return setFilters(products.filter(ram => ram.RAM === search))
    }

    // Recorro arreglo de productos para renderizar en la interfaz
    return (
        <>
            <div className="spinner">{spinner!=false? <Spinner/>: ''}</div>
            <Filters categoria={filterCategory} brand={filterBrand} ram={filterRam}/>  
            <div className='flex-container-il'> 
                {filters.length==0 ?
                products.map(p=> <Item key={p.id} p={p}/>)
                :
                filters.map(p=> <Item key={p.id} p={p}/>)
                }
            </div>
        </>
    )
}

export default ItemList
