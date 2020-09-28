import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Categories from './components/Categories.js';
import Footer from './components/Footer.js';

function App(props) {
  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
