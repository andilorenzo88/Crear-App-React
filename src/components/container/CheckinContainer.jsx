import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWrench} from "@fortawesome/free-solid-svg-icons";


const estilos = {
    color:"red"
}
const CheckinContainer = () => {
    return (
        <div>
            <h1><FontAwesomeIcon icon={faWrench}/> En construcción... <span style={estilos}> Registrarse</span></h1>
        </div>
    )
}

export default CheckinContainer
