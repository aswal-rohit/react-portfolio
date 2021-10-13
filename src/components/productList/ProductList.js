import React from 'react'
import Product from '../product/Product'
import './productList.css'
import {images} from '../../Data'

const ProductList = () => {
  return (
    <>
       <div className="product-list">
          <h1>Stay positive always, you can conquer this world with your brains</h1>
          <p> Go out there and be yourself. Do what you love most.</p>
          <div className="pl">
            {images.map((d)=>{
              return  <Product key={d.id} img={d.img}/>
            })}
          </div>
       </div>
    </>
  )
}

export default ProductList
