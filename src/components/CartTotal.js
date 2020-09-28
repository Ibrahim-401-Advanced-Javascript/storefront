import React from 'react';
import { connect } from 'react-redux';

const CartTotal = (props) => {
  return(
    <section className="cartTotal">
      {props.cartTotal}
    </section>
  )
}

const mapCartToProps = (state) => {
  return {
    cartTotal: state.counter.totalQuantity,
  }
}

export default connect(mapCartToProps)(CartTotal);