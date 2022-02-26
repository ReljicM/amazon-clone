import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal.js';


function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" />
        </div>
        <div className="checkout__title">
            <h2>Your shopping Basket</h2>
            {/* BasketItem */}
        </div>
        <div className="checkout__right">
            <Subtotal />
            <h2>The subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout