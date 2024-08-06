import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { db } from '../services/firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import CheckoutForm from './CheckoutForm';
import Loader from './Loader';
import './Checkout.css';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cartItems, getTotal, clearCart } = useCart();

  const createOrder = async ({ name, phone, email }) => {
    if (cartItems.length === 0) {
      console.error('Cart is empty or not defined');
      return;
    }

    setLoading(true);

    try {
      const objOrder = {
        buyer: { name, phone, email },
        items: cartItems,
        total: getTotal(),
        date: Timestamp.fromDate(new Date())
      };

      const ordersRef = collection(db, 'ordenes');
      const orderAdded = await addDoc(ordersRef, objOrder);

      setOrderId(orderAdded.id);
      clearCart();
      // Función para volver a cargar los items desde Firestore
      reloadItems();
    } catch (error) {
      console.error('Error creando la orden: ', error);
    } finally {
      setLoading(false);
    }
  };

  const reloadItems = () => {
    // Implementa la lógica para volver a cargar los items desde Firestore
   
  };

  if (loading) {
    return <Loader />;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
