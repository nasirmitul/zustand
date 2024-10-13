import React, { useState } from 'react'
import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import Profile from './Profile';
import Cart from './Cart';

export default function Navigation() {
  const [cartActive, isCartActive] = useState(false);
  const [profileActive, isProfileActive] = useState(false);
  return (
    <div>
      <div className="page-navigation">
        <div className="icon-design profile" onClick={() => isProfileActive(!profileActive)} >
          <LuUser2 className='icon' />
          {
            profileActive && <Profile></Profile>
          }
        </div>
        <p className='navigation-message'>You have added <span>00</span> items in cart</p>
        <div className="icon-design cart" onClick={() => isCartActive(!cartActive)}>
          <LuShoppingCart className='icon' />
          {
            cartActive && <Cart></Cart>
          }
        </div>
      </div>
    </div>
  )
}
