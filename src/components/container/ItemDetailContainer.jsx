import React from 'react'
import {  useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetails from './ItemDetails';


const ItemDetailContainer = () => {

  const {id} = useParams();

  const [productDetail, setDetail] = useState([])

  useEffect(() => {

    setTimeout(getProductDetail(),2000)
  
  }, [])
  
  
  const getProductDetail = () =>{

    const url = './data/productsDetails.json'

    fetch(url).then(res=> res.json() ).then(result=> {
        setDetail(result[id-1])

      })

  } 

  return (
      <div> {productDetail ? 
      <ItemDetails product={productDetail}/> 
      :
      ''
      }
      </div>
  )
}

export default ItemDetailContainer
