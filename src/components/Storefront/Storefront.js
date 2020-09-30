import React from 'react';
import Categories from './Categories.js';
import ActiveCategory from './activeCategory.js';
import Products from './Products.js';

function Storefront() {
  return (
    <section className="Storefront">
      <Categories />
      <ActiveCategory />
      <Products />
    </section>
  )
}

export default Storefront
