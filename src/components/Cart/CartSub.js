import React from 'react';
import { connect } from 'react-redux';
import { add, remove, reset } from '../../store/cartState.js';

const CartSub = (props) => {
  return (
    <section className="cartSubTotals">
      <ul>
        {props.products.map(product => 
          <li onClick={() => props.add(product.name)} key={product.name}>{product.name}: {product.quantity}<button onClick={props.remove}>Delete</button></li> 
          )}
      </ul>
      <button onClick={props.reset}>Empty Cart</button>
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
  remove,
  reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSub);
