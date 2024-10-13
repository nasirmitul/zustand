import React from 'react'
import { products } from '../../public/products';
import { useCartStore } from '../store/cartStore';
import { LuX } from 'react-icons/lu';

export default function Cart() {
  const allProducts = products;
  // const {cart, removeFromCart, clearCart} = useCartStore((state) => ({
  //   cart: state.cart,
  //   removeFromCart: state.removeFromCart,
  //   clearCart: state.clearCart
  // }));
  return (
    <div className='cart-page'>
      <button className='clear-cart'>Clear Cart</button>
      <div className="cart-info">
        {
          allProducts.map(product =>
            <div className='product' key={product?.id}>
              <p className="product-name">{product?.name}</p>
              <p className="total-price product-item">Price: <span>00</span></p>
              <p className='item-count product-item'>Total Added: <span>00</span></p>
              <p className='total-cost product-item'>Total Cost: <span>00</span></p>
              <div className="remove-from-cart"><LuX className='icon' /></div>
            </div>
          )
        }
      </div>
    </div>
  )
}
