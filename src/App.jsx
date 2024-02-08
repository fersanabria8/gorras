import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Checkout from './components/Checkout'
function App() {



  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:id' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
