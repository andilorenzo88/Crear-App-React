import React from 'react'
import { NavLink } from 'react-router-dom'


const TrackingId = ({trackingId, userData}) => {

    const style = {
        color:'red'
    }
    return (
        <div className='tracking-id'>
            <h2>GRACIAS POR LA COMPRA! Numero de referencia: <span>{trackingId}</span></h2>
            <p>A la brevedad recibirá un correo electronico a <span style={style}>{userData.email}</span> con el detalle de su compra.</p>
            <p>Para conocer el estado de su compra puede enviarnos un mensaje en el siguiente enlace: <NavLink to='/contact'>Contactenos</NavLink></p>
        </div>
    )
}

export default TrackingId