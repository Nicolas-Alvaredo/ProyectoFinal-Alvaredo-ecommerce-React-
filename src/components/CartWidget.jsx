import React from 'react'
import CartWidgetlogo from '../assets/CartWidget-logo.jpg'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={CartWidgetlogo} alt="Cart-Widget" className="cart-image" /> 
      0
    </div>
  );
};

export default CartWidget;
