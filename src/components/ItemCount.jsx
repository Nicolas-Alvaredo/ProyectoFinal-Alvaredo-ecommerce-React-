import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={handleDecrement}>-</button>
        <span className="Number">{quantity}</span>
        <button
          className="Button"
          onClick={handleIncrement}
          disabled={quantity >= stock}
          style={quantity >= stock ? { backgroundColor: '#cccccc', cursor: 'not-allowed' } : {}}
        >
          +
        </button>
      </div>
      <button className="item-button" onClick={() => onAdd(quantity)} disabled={stock <= 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
