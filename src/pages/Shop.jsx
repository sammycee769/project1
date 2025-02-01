import React, { useState,useEffect }  from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer.jsx'
import { FaArrowUp } from "react-icons/fa6";
import {products} from '../components/Shop.js'
import ProductCard from "../components/Shopcard.jsx";
import Shops from '../components/Images/shopnow.jpg'
import Hair from '../components/Images/All New Apple AirPods Pro—2nd Generation.jpeg'
import './Shop.css'

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
 

  const params = new URLSearchParams(location.search);
  const searchTerm = params.get('search') || ''; 
  const selectedCategory = params.get('category') || ''; 

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.cat.toLowerCase() === selectedCategory.toLowerCase()
        : true; 
      const matchesSearch = searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true; 
      return matchesCategory && matchesSearch;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]); 

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(location.search);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    navigate(`/shop?${params.toString()}`);
  };
 
  return (
    <>
    <div id='tip'>
    <Nav/>
    <div className='shop'>
     <div className='cunt'>
      <div className='lb'>
        <div className='category'>
          <div className='high'>
            <h3>All Categories</h3>
          </div>
         <div className='sit'>
          <ul>
            <li onClick={()=>  handleCategoryClick ('')}># All Products</li>
            <li onClick={()=>  handleCategoryClick ('Iphones')}># Iphones</li>
            <li onClick={()=>  handleCategoryClick ('Airpods')}># Airpods</li>
            <li onClick={()=>  handleCategoryClick ('Oppo')}># Oppo</li>
            <li onClick={()=>  handleCategoryClick ('Samsung')}># Samsung</li>
            <li onClick={()=>  handleCategoryClick ('Laptops')}># Laptops</li>
            <li onClick={()=>  handleCategoryClick ('Accessories')}># Accessories</li>
          </ul>
          </div>
          </div> 
          <div className='her'>
            <div className='herbox'>
            <img src={Hair} alt=''/>
            </div>
          </div>
        </div>
        <div className='you'>
          <div className='bant'>
           <div className='imgbox'>
            <img src={Shops} alt="" />
           </div>
        </div>
      </div>
     </div>
    </div>
    <div className='products'>
        <div className='container' >
          
           {filteredProducts.length === 0 ? (
          <li>No products found</li>
        ) : (
            filteredProducts.map((items,i)=>(
              <ProductCard 
              key={items.id}
              name={items.name}
              desc={items.desc}
              productImg={items.image}
              price={items.price}
              cat={items.cat}
              id={items.id}
              
              />
            ))
          )}
        </div>
      </div>
      <div className='cont'>
        <a id='bot' href="#tip"><FaArrowUp /> Back to Top</a>
        </div>

    </div>
    <Footer/>
    </>
  )
}
