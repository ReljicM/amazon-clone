import React, {useState, useEffect} from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const [sub, setSub] = useState(0);
    const subtotalItems = basket.length;
    console.log(basket.length)
    useEffect(() => {
        function total (){
            let totalVal = 0;
            for (let i = 0; i < basket.length; i++) {
                totalVal += basket[i].price;
                console.log(basket[i])
                setSub(totalVal);
            }
        }
        total();
    })
    
    
  return (
    <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
            <>
           
                <p> Subtotal {`(${subtotalItems} items)`} :
                        <strong>
                            {sub}$
                        </strong>
                </p>
            
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
         />
         <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal