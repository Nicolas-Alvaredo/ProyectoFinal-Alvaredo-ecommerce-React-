import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = { name, phone, email };
    onConfirm(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleConfirm} className="form">
        <label className="label">
          Nombre
          <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label className="label">
          Telefono
          <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label className="label">
          Email
          <input
            className="input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <button type="submit" className="button">Crear Orden</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
