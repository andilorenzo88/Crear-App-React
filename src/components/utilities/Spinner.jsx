import React from 'react'

const Spinner = () => {

    const styles ={
        color: "red",
        marginTop: "10px",
        // fontWeight: "bold",
        textTransform: "uppercase",
        msTransform: "translate(-50%,-50%)",
        transform:"translate(-50%,-50%)", 
        position: "absolute",
        top: "50%",
        left: "50%",
    }

    return (
        <div>
            <p style={styles}>Cargando ...</p>
        </div>
    )
}

export default Spinner
