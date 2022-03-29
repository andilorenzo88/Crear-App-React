import React, { useState } from 'react'
import './../../css/Contact.css'
import Contact from '../stateless/Contact'

const ContactContainer = () => {

    const [reason, setReason] = useState({})

    function getReason(e) {

        setReason({...reason, motivo: e.target.value})
    }
    console.log(reason);  

    
    return (
        <>
        <Contact getReason={getReason} reason={reason}/>
        </>
    )
}

export default ContactContainer
