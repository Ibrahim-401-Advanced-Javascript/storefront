import React from 'react'

import CartSub from './CartSub.js'
import CartTotal from './CartTotal.js'

function Cart() {
  return (
    <section className="Cart">
      <CartSub />
      <CartTotal />
    </section>
  )
}

export default Cart
