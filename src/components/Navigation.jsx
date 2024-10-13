import React from 'react'
import { LuShoppingCart, LuUser2 } from "react-icons/lu";

export default function Navigation() {
  return (
    <div>
      <div className="page-navigation">
        <div className="icon-design profile">
          <LuUser2 className='icon' />
        </div>
        <p className='navigation-message'>You have added <span>00</span> items in cart</p>
        <div className="icon-design cart">
          <LuShoppingCart className='icon' />
        </div>
      </div>
    </div>
  )
}
