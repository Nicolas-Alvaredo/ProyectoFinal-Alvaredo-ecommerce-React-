import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({ id, marca, text, precio, img }) => {
  return (
    <div className="ItemCard">
      <img src={img} alt={text} className="ItemImg" />
      <div className="ItemContent">
        <h3 className="ItemBrand">{marca}</h3> 
        <h2 className="ItemHeader">{text}</h2>
        <p>Precio: ${precio}</p>
      </div>
      <div className="ItemFooter">
        <Link to={`/item/${id}`} className="DetailsButton">Detalles</Link>
        
      </div>
    </div>
  );
};

export default Item;
