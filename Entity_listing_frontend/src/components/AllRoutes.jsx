import React from 'react';
import {Routes,Route} from "react-router-dom";
import Cart from '../pages/Cart';
import Homepage from '../pages/Homepage';
import Product from '../pages/Product';
import Products from '../pages/Products';

function AllRoutes() {
  return (
    
        <Routes>

            <Route path="/" element={<Homepage/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>


        </Routes>
    
  )
}

export default AllRoutes