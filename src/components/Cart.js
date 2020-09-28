import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  return(
    <section className="cart">
      {props.cartTotal} || ???
    </section>
  )
}

const mapCartToProps = (store) => {
  return {
    cartTotal: store.counter.totalQuantity,
  }
}




export default connect(mapCartToProps)(Cart);