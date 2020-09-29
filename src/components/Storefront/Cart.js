import React from 'react';

import { connect } from 'react-redux';
import { add, remove, reset } from '../../store/cartState.js';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Cart(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        id="view-cart"
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
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
      </div>
    );
  
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>VIEW CART</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
