/* eslint-disable no-case-declarations */

let initialState = {
  categories: [
    { name: 'Fruits', description: 'aaaa' },

    { name: 'Vegetables', description: 'bbbb' },

    { name: 'Herbs', description: 'cccc' },

    { name: 'Spices', description: 'dddd' },

  ],
  activeCategory: 'Fruits',
}

export default ( state = initialState, action ) => {

  
  let { type, payload } = action;

  // console.log('reducer:', type, payload);

  switch(type) {
    case 'NAVIGATE':

      return {...state, activeCategory: payload}

    default:
      return state;
  }
}

// actions: the only way to modify state
// functions which return an object with a particular set of key:value pairs
// { type: 'string', payload: any }

export const navigate = (name) => {
  return {
    type: 'NAVIGATE',
    payload: name,
  }
}
