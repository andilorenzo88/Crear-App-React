import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'

import ItemDetails from './ItemDetails'
import Spinner from '../stateless/Spinner';
import db from '../../firebase/firabaseClient';
import { doc, getDoc } from '@firebase/firestore';



const ItemDetailContainer = () => {

    const [itemDetail, setDetail] = useState([])
    const [spinner, setSpinner] = useState(true)

    const {id}= useParams()

    useEffect(() => {

        setTimeout(() => {
            const docRef = doc(db, 'productos', id)
            const docSnap = getDoc(docRef)
    
            docSnap.then(r => setDetail(r.data()));
            setSpinner(false)   
        }, 1000);
        
    }, [id])
    
    return (
        <div>
            {spinner? <Spinner/> : <ItemDetails product={itemDetail}/>}
        </div>
    )
}

export default ItemDetailContainer
