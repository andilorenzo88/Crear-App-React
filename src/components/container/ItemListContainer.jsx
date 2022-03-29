import React, { useEffect, useState } from 'react'
import { collection, getDocs } from '@firebase/firestore';
import db from './../../firebase/firabaseClient';
import ItemList from './ItemList'



const ItemListContainer = () => {

  //Hooks
  const [products, setProducts] = useState([])
  const [spinner, setSpinner] = useState(true)

  useEffect(() => {

    const getProducts = async () => {

        const data = await getDocs(collection(db, 'productos'))

        let arrayProducts = []

        data.forEach( (doc) => {
            arrayProducts.push(doc.data())
        });

        setProducts(arrayProducts)
        setSpinner(false)
    }
    
    getProducts()

}, [])

console.log('Catalogo de productos: ',products);


  return (
    
      <div>
        <ItemList products={products} spinner={spinner}/>      
      </div>
  )
}

export default ItemListContainer