import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'; 
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import CategoryFilter from './CategoryFilter';
import Loader from './Loader';
import Swal from 'sweetalert2';

const ItemListContainer = (props) => {
  const { greeting } = props;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const collectionRef = collection(db, 'items');
      let q;
      if (category && category !== 'all') {
        q = query(collectionRef, where('categoria', '==', category));
      } else {
        q = collectionRef;
      }
      const querySnapshot = await getDocs(q);
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Error fetching products: ${error.message}`
      });
    } finally {
      setLoading(false);
    }
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
      {loading ? <Loader /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
