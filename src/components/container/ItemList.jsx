import React, { useEffect, useState} from 'react';


import Item from './Item';
import Filters from '../stateless/Filters';
import Spinner from '../stateless/Spinner';
import './../../css/ItemList.css'

import { collection, getDocs } from '@firebase/firestore';
import db from '../../firebase/firabaseClient';


const ItemList = () => {

    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const [spinner, setSpinner] = useState(true)


    useEffect(() => {

        const getProducts = async () => {

            const data = await getDocs(collection(db, 'productos'))

            let arrayProducts = []

            data.forEach( (doc) => {
                arrayProducts.push(doc.data())
                console.log(arrayProducts);
            });
            
            setProducts(arrayProducts)
            setSpinner(false)
        }

        getProducts()

    }, [])
    
    
    // useEffect(() =>    
    
    //     const getData = async () => {
        
    //         const data = await getDocs(collection(db, "productos"))
        
    //         let listaDeProductos = []
        
    //         data.forEach( doc => {
    //             // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
    //             // console.log('DOC DATA', doc.data(),'DOC ID = ', doc.id);

    //             listaDeProductos.push(doc.data())
    //             setSpinner(false)
    //         });

    //         setProducts(listaDeProductos)
    //     }
    //     getData()
    
    
    // }, [])


    // useEffect(()=>{

    //     setTimeout(getProducts, 2000)
    // },[])

    // const getProducts = () => {

    //     const request = fetch('/data/products.json')

    //     request.then(response =>response.json())
    //         .then(res => {
    //             console.log(res);
    //             setProducts(res);
    //             setSpinner(false)
    //         })
    // }
    
    const filterCategory = (e)=> {

        const search = e.target.value
        console.log(search);
        return setFilters(products.filter(cat => cat.categoria === search))
    }
    const filterBrand = (e)=> {
        
        return setFilters(products.filter(brand => brand.marca === e.target.value))
    }
    const filterRam = (e)=> {

        const search = e.target.value
        console.log(search);
        return setFilters(products.filter(ram => ram.ram === search))
    }

    // Recorro arreglo de productos para renderizar en la interfaz
    return (
        <>
            <div className="spinner">{spinner? <Spinner/>: ''}</div>
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
