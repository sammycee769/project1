import React from 'react'
import './Home.css'
import Banner from '../components/Banner'
import {products} from '../components/products.js'
import ProductCard from "../components/ProductCard";
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { FaArrowUp } from "react-icons/fa6";

export default function Home() {
  return (
   <><div id='bit'>
   <Nav/>
   <Banner/>
      <div className='products'>
        <div className='container' >
          {
            products.map((items,i)=>(
              <ProductCard 
              key={items.id}
              name={items.name}
              desc={items.desc}
              productImg={items.image}
              price={items.price}
              />
            ))
          }
        </div>
      </div>
      <div className='cont'>
        <a id='bot' href="#bit"><FaArrowUp /> Back to Top</a>
        </div>
        </div>
  <Footer/>    
   </>
  )
}
