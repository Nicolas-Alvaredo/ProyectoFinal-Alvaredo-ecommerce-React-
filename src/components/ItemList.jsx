import React from 'react';
import Item from './Item';


const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <Item
          key={product.id}
          id={product.id}
          marca={product.marca}
          text={product.text}
          precio={product.precio}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default ItemList;
