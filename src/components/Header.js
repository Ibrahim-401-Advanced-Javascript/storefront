import React from 'react';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { add, remove, reset } from '../store/cartState.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function Header(props) {

  return (
    <>
    <section className="Header">
      <Typography id="store-heading" component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Store
      </Typography>

      <section className="Cart">
        <List>
          {props.products.map((product) => (
          <ListItem key={product.name}>
            {product.name}: {product.quantity}
            <button id="plus" onClick={() => props.add(product.name)}>+</button>
            <button id="minus" onClick={() => props.remove(product.name)}>-</button>
          </ListItem>
        ))}
          <ListItem id="cartTotal">
            Total Items: {props.cartTotal}
            <button id="reset-button" onClick={props.reset}>Empty Cart</button>
          </ListItem>
        </List>
      </section>
    </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.counter.products,
    cartTotal : state.counter.totalQuantity
  }
}

const mapDispatchToProps = {
  add,
  remove,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
