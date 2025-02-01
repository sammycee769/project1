// ProductContext.js
import React, { createContext, useContext } from 'react';
import { products } from '../components/Shop.js'

// Create context for products
const ProductContext = createContext();

// Custom hook to use ProductContext
export const useProducts = () => useContext(ProductContext);

// ProductProvider to provide the products globally
export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
