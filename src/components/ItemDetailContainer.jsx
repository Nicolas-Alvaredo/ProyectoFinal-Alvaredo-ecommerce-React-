import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {loading ? <h2>Cargando...</h2> : product ? <ItemDetail {...product} stock={10} /> : <h2>Producto no encontrado</h2>}
    </div>
  );
};

export default ItemDetailContainer;
