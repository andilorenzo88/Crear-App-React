import React, { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import Spinner from '../utilities/Spinner';

const ItemDetailContainer = () => {

    const [itemDetail, setDetail] = useState(null)
    const {id}= useParams()

    useEffect(() => {

        setTimeout(getDetail,2000)

    },[])
    
    const getDetail = () => {

        const url = fetch('/data/productsDetails.json')

        url.then((res) =>res.json()).then((res) => {
            console.log(res);
            setDetail(res[id-1])}) 
    }

    return (
        <div>
            {itemDetail? <ItemDetails product={itemDetail}/> :  <Spinner/> }
        </div>
    )
}

export default ItemDetailContainer
