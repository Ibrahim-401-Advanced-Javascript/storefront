import React from 'react';
import Categories from './Categories.js';
import ActiveCategory from './activeCategory.js';
import Cart from './Cart.js';
import Products from './Products.js';

function Storefront() {
  return (
    <section className="Storefront">
      <Categories />
      <ActiveCategory />
      <Cart />
      <Products />
    </section>
  )
}

export default Storefront
