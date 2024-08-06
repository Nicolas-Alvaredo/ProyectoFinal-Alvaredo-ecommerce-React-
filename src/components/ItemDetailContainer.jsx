import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import Loader from './Loader';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'items', itemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const productData = { id: docSnap.id, ...docSnap.data() };
          setProduct(productData);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No such document!'
          });
          setProduct(null);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error fetching product: ${error.message}`
        });
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {loading ? <Loader /> : product ? <ItemDetail {...product} stock={product.stock} /> : <h2>Producto no encontrado</h2>}
    </div>
  );
};

export default ItemDetailContainer;
