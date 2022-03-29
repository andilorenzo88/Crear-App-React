import React,{ useState } from 'react';
import Item from './Item';
import Filters from './../stateless/Filters';
import Spinner from './../stateless/Spinner';
import './../../css/ItemList.css'



const ItemList = ({products, spinner}) => {

    const [filters, setFilters] = useState([])

    // Filtros catalogo
    const filterCategory = e => setFilters(products.filter(cat => cat.categoria === e.target.value))

    const filterBrand = e => setFilters(products.filter(brand => brand.marca === e.target.value))

    const filterRam = e => setFilters(products.filter(ram => ram.ram === e.target.value))

    // Recorro catalogo de productos para renderizar en la interfaz
    //
    return (
        <>
            <div className="spinner">{spinner? <Spinner/>: ''}</div>
            <Filters categoria={filterCategory} brand={filterBrand} ram={filterRam}/>  
            <div className='catalog'> 
                {filters.length===0 ?
                products.map(p=> <Item key={p.id} p={p}/>)
                :
                filters.map(p=> <Item key={p.id} p={p}/>)
                }
            </div>
        </>
    )
}

export default ItemList
