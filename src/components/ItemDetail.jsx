import React, { useState } from 'react';
import './ItemDetail.css'; 
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, marca, text, precio, img, aleacion, genero, stock }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItemToCart, getItemQuantity } = useCart();

  const handleAdd = (quantity) => {
    addItemToCart({ id, marca, text, precio, img }, quantity);
    setAddedToCart(true);
  };

  const itemQuantity = getItemQuantity(id);
  const availableStock = stock - itemQuantity;

  return (
    <div className="item-card">
      <img src={img} alt={text} className="item-img" />
      <div className="item-content">
        <h3 className="item-brand">{marca}</h3> 
        <h2 className="item-header">{text}</h2>
        <p>Aleación: {aleacion}</p> 
        <p>Género: {genero}</p>
        <p>Precio: ${precio}</p>
        <p>Stock: {availableStock}</p>
      </div>
      <div className="item-footer">
        {addedToCart ? (
          <Link to="/cart">
            <button className="item-button">Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={availableStock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
