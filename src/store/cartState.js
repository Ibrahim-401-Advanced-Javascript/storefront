/* eslint-disable no-case-declarations */

let initialState = {
  products: [
    { name: 'Bananas', quantity: 0, description: 'potassium ++', image_url: 'https://images.unsplash.com/photo-1464918877125-24db0dc393cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80', image_title: 'bananas' },

    { name: 'Pomegranates', quantity: 0, description: 'happiness ++', image_url: 'https://images.unsplash.com/photo-1553499944-5472133459bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3025&q=80', image_title: 'pomegranates' },

    { name: 'Pineapples', quantity: 0, description: 'vitamin c ++', image_url: 'https://images.unsplash.com/photo-1589427290283-4781bd6f31ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1676&q=80', image_title: 'pineapples' },

  ],
  totalQuantity: 0,
}

export default ( state = initialState, action ) => {

  let { type, payload } = action;
  let totalQuantity = 0;
  let products = [];

  switch(type) {
    case 'ADD':
      totalQuantity = state.totalQuantity + 1;

      products = state.products.map(product => {

        if (product.name === payload) {
          return { name: product.name, quantity: product.quantity + 1, description: product.description, image_url: product.image_url, image_title: product.image_title }
        }
        return product;
      })
      return { totalQuantity, products };

    case 'REMOVE':
      totalQuantity = state.totalQuantity - 1;

      products = state.products.map(product => {

        if (product.name === payload) {
          return { name: product.name, quantity: product.quantity - 1, description: product.description, image_url: product.image_url, image_title: product.image_title }
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

export const add = (name) => {
  return {
    type: 'ADD',
    payload: name,
  }
}

export const remove = (name) => {
  return {
    type: 'REMOVE',
    payload: name,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}