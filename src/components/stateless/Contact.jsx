import React from 'react'

const Contact = ({getReason, reason}) => {
    return (
        <form className='form-contact' action="">
            <div className='form-inputs'>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="nombre" placeholder='Nombre completo' required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder='Ingrese su correo'required/>
                </div>
                <div className='reason-form'>
                    <label htmlFor="reason">Motivo</label>
                    <select name="reason" onChange={getReason}>
                        <option value=""></option>
                        <option value="estado compra" >Consultar estado de compra</option>
                        <option value="consulta tecnica" >Consulta tecnica</option>
                        <option value="consulta disponibilidad">Consulta disponiblidad</option>
                    </select>
                    {reason.motivo=== 'estado compra' 
                    ?   
                    <>
                        <label className='label-ref'>Codigo Referencia</label><input className='input-reference' placeholder='Ingrese codigo ref' required/>
                    </>
                    :
                    ''
                    } 
                </div>
            </div>
            <div className='form-textarea'>
                <textarea name="" id="" cols="80" rows="15" placeholder='Escriba su mensaje, le responderemos a la brevedad.'></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form> 

    )
}

export default Contact