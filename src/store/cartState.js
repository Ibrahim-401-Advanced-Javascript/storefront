let initialState = {
  products: [
    { name: 'Prod1', quantity: 0 },
    { name: 'Prod2', quantity: 0 },
    { name: 'Prod3', quantity: 0 },
  ],
  totalQuantity: 0,
}

export default ( state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'ADD':
      let totalQuantity = state.totalQuantity + 1;
      let products = state.products.map(product => {
        if (product.name === payload) {
          return { product: product.name, quantity: product.quantity + 1 }
        }
        return product;
      })
      return { totalQuantity, products };

    case 'REMOVE':
      totalQuantity = state.totalQuantity - 1;
      products = state.products.map(product => {
        if (product.name === payload) {
          return { product: product.name, quantity: product.quantity - 1 }
        }
        return product;
      })
      return { totalQuantity, products };

    case 'RESET':
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
    type: 'ADD',
    payload: product,
  }
}

export const remove = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}