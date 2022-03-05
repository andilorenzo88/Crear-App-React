import React from 'react';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/stateless/Navbar';
import HomeContainer from './components/container/HomeContainer';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import ContactContainer from './components/container/ContactContainer'
import CheckinContainer from './components/container/CheckinContainer';
import CartContainer from './components/container/CartContainer'
import Footer from './components/stateless/Footer';

import './App.css';



function App() {
  return (

    <BrowserRouter>
        <Navbar/>
        <main className="App">
          <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/catalogo' element={<ItemListContainer/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
            <Route path='/contact' element={<ContactContainer/>}/>
            <Route path='/checkin' element={<CheckinContainer/>}/>
            <Route path='/carrito' element={<CartContainer/>}/>
          </Routes>
        </main>
        <Footer/>
    </BrowserRouter>

  );
}


export default App;


