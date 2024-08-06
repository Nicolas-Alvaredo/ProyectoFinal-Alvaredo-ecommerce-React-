import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeItemFromCart, clearCart, getTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>Carrito de compras</h1>
      {cartItems && cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems && cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.text} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.text}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.precio}</p>
                <p>Subtotal: ${item.precio * item.quantity}</p>
              </div>
              <button onClick={() => removeItemFromCart(item.id)} className="remove-button">Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${getTotal()}</h3>
            <div className="cart-buttons">
              <button onClick={clearCart} className="clear-button">Vaciar Carrito</button>
              <button onClick={() => navigate('/checkout')} className="checkout-button">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
