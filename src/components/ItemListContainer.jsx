import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'; 
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';

const ItemListContainer = (props) => {
  const { greeting } = props;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const fetchProducts = (category) => {
    setLoading(true);
    const asyncFunc = category && category !== 'all' ? getProductsByCategory : getProducts;
    asyncFunc(category !== 'all' ? category : undefined)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts(categoryId);
  }, [categoryId]);

  const handleFilterChange = (category) => {
    fetchProducts(category);
  };

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <CategoryFilter onFilterChange={handleFilterChange} />
      {loading ? <h2>Cargando...</h2> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
