import React, { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import Errorpage from './pages/Errorpage.jsx'
import Cart from './pages/Cart.jsx'
import Reportaproblem from './pages/Reportaproblem.jsx'
import { CartProvider } from '../src/pages/CartContext.js';
import { products } from '../src/components/Shop.js'
import { ProductProvider } from '../src/pages/ProductContext.js';
import ShoopCard from './components/Shopcard.jsx'

export default function App() {
  
  return (
    <>
    
    <CartProvider>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/Errorpage' element={<Errorpage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/reportaproblem' element={<Reportaproblem/>}></Route>
    </Routes>
    </CartProvider>
    </>
  )
}
