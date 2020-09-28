let initialState = {
  products: [
    { product: 'Prod1', quantity: 0 },
    { product: 'Prod2', quantity: 0 },
    { product: 'Prod3', quantity: 0 },
  ],
  totalQuantity: 0,
}

// actions: the only way to modify state
// functions which return an object with a particular set of key:value pairs
// { type: 'string', payload: any }

export default ( state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'add':
      let totalQuantity = state.totalQuantity + 1;
      return totalQuantity;
    case 'remove':
      totalQuantity = state.totalQuantity - 1;
      return totalQuantity;
    case 'reset':
      totalQuantity = 0;
      return totalQuantity;
    default:
      return state;
  }


}

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

export const reset = (cart) => {
  return {
    type: 'reset',
    payload: cart,
  }
}