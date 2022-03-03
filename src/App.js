import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/container/ItemListContainer';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomeContainer from './components/container/HomeContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';




function App() {
  return (

    <BrowserRouter>
        <Navbar/>
        <main className="App">
          <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/catalogo' element={<ItemListContainer/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
            <Route path='/location' element={<ItemListContainer/>}/>
            <Route path='/contact' element={<ItemListContainer/>}/>
            <Route path='/carrito' element={<ItemListContainer/>}/>
          </Routes>
        </main>
    </BrowserRouter>

  );
}


export default App;


