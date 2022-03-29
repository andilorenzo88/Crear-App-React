import React from 'react';

import { CartContextProvider } from './components/context/CartContext';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/stateless/Navbar';
import HomeContainer from './components/container/HomeContainer';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import ContactContainer from './components/container/ContactContainer'
import CheckoutContainer from './components/container/CheckoutContainer';
import CartContainer from './components/container/CartContainer'
import Footer from './components/stateless/Footer';

import './css/App.css'

function App() {
  return (
  
  <CartContextProvider>
    <BrowserRouter>
        <Navbar/>
        <main className="App">
          <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/catalogo' element={<ItemListContainer/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
            <Route path='/contact' element={<ContactContainer/>}/>
            <Route path='/checkout' element={<CheckoutContainer/>}/>
            <Route path='/carrito' element={<CartContainer/>}/>
          </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;


