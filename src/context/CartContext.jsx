import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../services/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  const addItemToCart = (item, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const removeItemFromCart = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  const getItemQuantity = id => {
    const item = cartItems.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const reloadItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsData);
  };

  useEffect(() => {
    reloadItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, getTotal, getItemQuantity, items, reloadItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
