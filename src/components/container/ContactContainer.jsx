import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWrench} from "@fortawesome/free-solid-svg-icons";

import {collection, getFirestore,getDocs} from 'firebase/firestore'
import './../../firebase/firabaseClient'


const styles = {
        color:"red"
}

const ContactContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

            const asynCall = async () => {

                const db = getFirestore()
            
                const querySnapshot = await getDocs(collection(db, "productos"));
            
                let listaDeProductos = []
            
                querySnapshot.forEach( doc => {
                    // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
                    console.log('DOC DATA', doc.data());
                    listaDeProductos.push(doc.data())
                });
            
                setProductos(listaDeProductos)

            }
            asynCall()
        
        }, [])
    
        console.log(productos);



    return (
        <div>
            <h1><FontAwesomeIcon icon={faWrench}/> En construcción .. <span style={styles}>contacto</span></h1>

            {productos.map(p=> <img src={(p.img)} alt= 'foto'/>)}
        
        </div>
    )
}

export default ContactContainer
