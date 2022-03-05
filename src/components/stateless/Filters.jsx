import React from 'react'
import './../../css/Filters.css'



const Filters = ({categoria, brand, ram}) => {

    return (

        <div>
            <nav className="nav-filters">
                <form className="form-filters">
                    <select className ="select-filters" name="categorias" id="categorias" onChange={categoria}>
                        <option value="">Categoria</option>
                        <option value="Notebook">Notebook</option>
                        <option value="Ultrabook">Ultrabook</option>
                        <option value="Gaming">Gaming</option>
                    </select>

                    <select className ="select-filters" name="Marca" id="Marca" onChange={brand}>
                        <option value="">Marca</option>
                        <option value="Apple" >Apple</option>
                        <option value="Asus" >Asus</option>
                        <option value="Acer" >Acer</option>
                        <option value="Hp" >Hp</option>
                        <option value="Huawei" >Huawei</option>
                        <option value="Lenovo" >Lenovo</option>
                        <option value="Lenovo" >MSI</option>
                    </select>

                    <select className ="select-filters" name="RAM" id="RAM" onChange={ram}>
                        <option value="">Ram</option>
                        <option value="8" >8</option>
                        <option value="16" >16</option>
                        <option value="32" >32</option>
                    </select>
                </form>
            </nav>
        </div>
    )
}

export default Filters
