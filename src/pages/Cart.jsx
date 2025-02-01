import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { FaArrowUp } from 'react-icons/fa6'
import './Cart.css'
import { useCart } from './CartContext.js'
import {Link} from 'react-router-dom';

export default function Cart() {
const {cart,removeFromCart}= useCart();
  return (
    <div className='fop'>
    <div className='tip'>
   <Nav/>
   <div className='cart'>
      <h5>My Cart</h5>
      {
        Cart.length === 0 ?(
          <div className='emptycart'>
          <p>Your Cart Is Empty </p>
          <Link as={Link} to='/shop'>  <button>Shop Now</button></Link>
          </div> 
        ) :(  <ul className="list-group">
          {cart.map((product, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              {product.name} - {product.price.toLocaleString("en-NG",
                          {style: 'currency', currency: 'NGN'})}
              <button onClick={() => removeFromCart(product.name)}>Remove</button>
            </li>
          ))}
        </ul>) 
      }
    <div className='lit'>

    </div>

   </div>
   
   
   
   
   
   <div className='cont'>
        <a id='bot' href="#tip"><FaArrowUp /> Back to Top</a>
        </div>
   </div>
   <Footer/>
    </div>
  )
}
