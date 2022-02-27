import React, { useState } from 'react';
import './ShoppingCard.css';
import { Link } from 'react-router-dom';
import getBasketTotal from './reducer';
import { useStateValue } from './StateProvider';


function ShoppingCart({id ,price, title, image, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const [checked, setChecked] = useState(true);

    const removeBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                checked: false,
            }
        })
    }

  const handleChange = () => {
    setChecked(!checked);
    removeBasket()
  };
    

  return (
      <div className="shoppingCard">
            
            {/* BasketItem */}
        
        <div className="shoppingCard__items">
          <div className="shoppingCard__imgHolder">
              <div>
                  <label>
                    <input type="checkbox"  onChange={handleChange} checked={checked} />
                </label>
              </div>
            
            <Link to=".some">
            <img src={image} />
            </Link>
          </div>
          
              <div className="shoppingCard__info">
              <span className="shoppingCard__offScreen">
                  <span>{title}</span>
              </span>
              <div>
                  <p>${price}</p>
              </div>
              <ul>
                <li>In Stock</li>
                <li>Gift options not available.Gift options not available. Learn more</li>
                <li><strong>Size</strong>: Keyboard</li>
                <li><strong>Color</strong>: Mercury White</li>
                <li><strong>Pattern Name</strong>: Clicky Optical Switch</li>
              </ul>
              </div>
          
          
        </div>
        </div>
        
  )
}

export default ShoppingCart