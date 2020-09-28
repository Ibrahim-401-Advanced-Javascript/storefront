import React from 'react';
import Products from './Products.js';
import CartSub from './CartSub.js';
import CartTotal from './CartTotal.js';

function Categories() {
  return (
    <>
    <h5>^^^ nav for all categories</h5> 
    <h3>Current Category</h3>
    <CartSub />
    <CartTotal />
    <Products />
    </>
  )
}

export default Categories
