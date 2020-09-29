import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Storefront from './components/Storefront/Storefront.js';
import Footer from './components/Footer.js';

function App(props) {
  return (
    <section className="App">
      <Header />
      <Storefront />
      <Footer />
    </section>
  );
}

export default App;
