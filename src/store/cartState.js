let initialState = {
  products: [
    { product: 'Prod1', quantity: 0 },
    { product: 'Prod2', quantity: 0 },
    { product: 'Prod3', quantity: 0 },
  ],
  totalQuantity: 0,
}

export default ( state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'add':
      let totalQuantity = state.totalQuantity + 1;
      let products = state.products.map(product => {
        if (product.product === payload) {
          return { product: product.product, quantity: product.quantity + 1 }
        }
        return product;
      })
      return { totalQuantity, products };

    case 'remove':
      totalQuantity = state.totalQuantity - 1;
      products = state.products.map(product => {
        if (product.product === payload) {
          return { product: product.product, quantity: product.quantity - 1 }
        }
        return product;
      })
      return { totalQuantity, products };

    case 'reset':
      return initialState;

    default:
      return state;
  }
}

// actions: the only way to modify state
// functions which return an object with a particular set of key:value pairs
// { type: 'string', payload: any }

export const add = (product) => {
  return {
    type: 'add',
    payload: product,
  }
}

export const remove = (product) => {
  return {
    type: 'remove',
    payload: product,
  }
}

export const reset = () => {
  return {
    type: 'reset',
  }
}