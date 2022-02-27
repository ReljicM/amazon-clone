import React from 'react'
import { Link } from 'react-router-dom'
import "./Checkout.css"
import Subtotal from './Subtotal.js';
import ShoppingCart from './ShoppingCart'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./reducer";




function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
      
        <div className="checkout__title">
            <h1>Shopping Cart</h1>
            <div>No items selected. <Link to=".">Select all items</Link></div>
            <p>Price</p>
        {basket && basket.map(item => (
          
          <ShoppingCart key={item.id} checked={item.checked} id={item.id} price={item.price} title={item.title} image={item.image} />
        ))}
      
       </div>
       <div className="shoppingCard__subtotal">
       <CurrencyFormat
        renderText={(value) => (
            <>
           
                <p>
                     Subtotal ({basket.length} items) : <strong>{value}</strong>
                </p>
        
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
         />
        </div>
      </div>
        <div className="checkout__right">
            <Subtotal />
            <h2>The subtotal will go here</h2>
        </div>
    </div>
    
    
    
  )
}

export default Checkout