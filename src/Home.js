import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt="amazon prime" />
            <div className="home__row">
              <Product id={1234} price={19.99} rating={5} title="Item " image={`https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL640_QL65_.jpg`} />
              <Product id={1231} price ={12.99} rating={4} title="Iphone charger" image={`https://m.media-amazon.com/images/I/71m-EsCA2aL._AC_UL640_QL65_.jpg`} />
            </div>
            <div className="home__row">
              <Product id={1232} title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps"
              price={70.00} rating={4} image={`https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL640_QL65_.jpg`} />
              <Product id={1233} title="Original HP 67 Black/Tri-color Ink Cartridges" 
              rating={4} price={59.24} image={`https://m.media-amazon.com/images/I/71ic26eWeLL._AC_UL640_QL65_.jpg`}/>
              <Product id={1235} title="Apple Pencil (2nd Generation)"
              rating={5} price={100} image={`https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg`} />
            </div>
            <div className="home__row">
              <Product id={1236} title={`Sceptre 24" Professional Thin 75Hz 1080p LED Monitor`}
              rating={5} price={134.06} image={`https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg`} />
            </div>
        </div>
    </div>
  )
}

export default Home