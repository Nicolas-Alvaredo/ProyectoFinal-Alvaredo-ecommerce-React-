import React from 'react';
import { useCart } from '../context/CartContext';
import CartWidgetLogo from '../assets/CartWidget-logo.jpg';
import './CartWidget.css';

const CartWidget = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <img src={CartWidgetLogo} alt="Cart" className="cart-widget-logo" />
      {totalItems > 0 && <span className="cart-widget-count">{totalItems}</span>}
    </div>
  );
};

export default CartWidget;
