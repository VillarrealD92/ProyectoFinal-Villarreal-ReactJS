import React, { useState, useContext } from 'react';
import { db } from '../firebase/client';
import { collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function OrderForm({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const { cart, clearCart, total } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !direccion) {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
      return;
    }

    const orderData = {
      nombre,
      email,
      direccion,
      servicios: cart,
      total: total,
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), orderData);
      onSubmit(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al guardar la orden en Firebase:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Link to="/cart">
          <button className="btn btn-primary">Volver</button>
        </Link>
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control w-50 mx-auto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Dirección:</label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-success">Confirmar Pedido</button>
      </div>
      <div>
        <h4>Total a debitar: ${total}</h4>
      </div>
    </form>
  );
}

export default OrderForm;