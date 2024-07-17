import React, { useState } from 'react';
import './ItemDetail.css'; 
import ItemCount from './ItemCount';

const ItemDetail = ({ id, marca, text, precio, img, aleacion, genero, stock }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (quantity) => {
    console.log(`Cantidad agregada: ${quantity}`);
    setAddedToCart(true);
    // Aquí Podriamos llamar una función para agregar el producto al carrito
  };

  return (
    <div className="item-card">
      <img src={img} alt={text} className="item-img" />
      <div className="item-content">
        <h3 className="item-brand">{marca}</h3> 
        <h2 className="item-header">{text}</h2>
        <p>Aleación: {aleacion}</p> 
        <p>Género: {genero}</p>
        <p>Precio: ${precio}</p>
      </div>
      <div className="item-footer">
        {addedToCart ? (
          <button className="item-button">Finalizar compra</button>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
