import React from 'react'
import './product.css'

const Product = ({img}) => {
  return (
    <div className="p">
      <div className="browser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href="/">
        <img src={img} alt="pic" className="p-img" />
      </a>
    </div>
  )
}

export default Product
