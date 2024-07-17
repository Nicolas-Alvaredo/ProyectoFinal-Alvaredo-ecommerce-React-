import React from 'react'
import CartWidgetlogo from '../assets/CartWidget-logo.jpg';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={CartWidgetlogo} alt="Cart-Widget" className="cart-image" />
      <span className="cart-count">0</span>
    </div>
  );
};

export default CartWidget;
