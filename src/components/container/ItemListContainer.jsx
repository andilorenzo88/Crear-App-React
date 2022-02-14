import React from 'react'

let style = {
  color: 'red'
}

const ItemListContainer = ({name}) => {
  return (
    
      <div>
        <h1 style={style}>Hola {name}, bienvenido a mi App !</h1>  
      </div>

  )
}

export default ItemListContainer