import React from 'react';
import Categories from './Categories.js';
import Cart from './Cart.js';
import Products from './Products.js';

function Storefront() {
  return (
    <section className="Storefront">
      <Categories />
      <Cart />
      <Products />
    </section>
  )
}

export default Storefront
