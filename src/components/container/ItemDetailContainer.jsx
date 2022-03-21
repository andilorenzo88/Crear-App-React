import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'

import ItemDetails from './ItemDetails'
import Spinner from '../stateless/Spinner';
import db from '../../firebase/firabaseClient';
import { doc, getDoc } from '@firebase/firestore';



const ItemDetailContainer = () => {

    const [itemDetail, setDetail] = useState([])

    const {id}= useParams()

    useEffect(() => {

        const docRef = doc(db, 'productos', id)
        const docSnap = getDoc(docRef)

        docSnap.then(r => setDetail(r.data()))

    }, [id])
    
    
    // useEffect(() => {

    //     setTimeout(getDetail,2000)

    // },[])
    
    // const getDetail = () => {

    //     const url = fetch('/data/productsDetails.json')

    //     url.then((res) =>res.json()).then((res) => {
    //         console.log(res);
    //         setDetail(res[id-1])}) 
    // }

    return (
        <div>
            {itemDetail? <ItemDetails product={itemDetail}/> :  <Spinner/> }
        </div>
    )
}

export default ItemDetailContainer
