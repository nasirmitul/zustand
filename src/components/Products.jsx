import React from 'react'
import { products } from '../../public/products'

export default function Products() {

  const allProducts = products;

  return (
    <div className='all-product'>
      {
        allProducts.map(product =>
          <div className='product' key={product?.id}>
            <p className="product-name">{product?.name}</p>
            <div className="price-category">
              <div className="price">
                <p>price: <span>{product?.price}</span></p>
              </div>
              <div className="category">
                <p>Category: <span>{product?.category}</span></p>
              </div>
            </div>
            <p className="description">{product?.description}</p>
            <button className='atc'>Add to cart</button>
            <div className="increment-decrement">
              <div className="increment">-</div>
              <p>00</p>
              <div className="decrement">+</div>
            </div>
          </div>
        )
      }
    </div>
  )
}
