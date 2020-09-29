import React from 'react';
import { connect } from 'react-redux';
import { add } from '../store/cartState.js';

const Products = (props) => {
  return (
    <section className="Products">
      <ul>
        {props.products.map(product => 
          <li onClick={() => props.add(product.name)} key={product.name}>{product.name}
          <button onClick={props.add}>Add to Cart</button></li> 
          )}
      </ul>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.counter.products
  }
}

const mapDispatchToProps = {
  add,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
