import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomeContainer from './components/container/HomeContainer';




function App() {
  return (

    <BrowserRouter>
        <Navbar/>
        <div className="App">
          <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
            <Route path='/location' element={<ItemListContainer/>} text='Donde estamos'/>
            <Route path='/contact' element={<ItemListContainer/>} text='Contacto'/>
            <Route path='/carrito' element={<ItemListContainer/>}text='cart'/>


          </Routes>
        </div>
    </BrowserRouter>

  );
}


export default App;


