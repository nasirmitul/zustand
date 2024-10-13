import React from 'react'
import { products } from '../../public/products';

export default function Cart() {
  const allProducts = products;
  return (
    <div className='cart-page'>
      <div className="cart-info">
        {
          allProducts.map(product =>
            <div className='product' key={product?.id}>
              <p className="product-name">{product?.name}</p>
              <p className="total-price product-item">Price: <span>00</span></p>
              <p className='item-count product-item'>Total Added: <span>00</span></p>
              <p className='total-cost product-item'>Total Cost: <span>00</span></p>
            </div>
          )
        }
      </div>
    </div>
  )
}
