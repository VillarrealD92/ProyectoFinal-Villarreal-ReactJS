import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderForm from './OrderForm';
import OrderItem from './OrderItem'; // Importa el componente OrderItem

function Order() {
  const [orderId, setOrderId] = useState(null);
  const handleFormSubmit = async (id) => {
    setOrderId(id);
  };

  return (
    <div className='text-center'>
      <h2>Orden de Compra</h2>
      {orderId ? (
        <div>
          <OrderItem orderId={orderId} />
          <div>
            <Link to="/">
              <button className="btn btn-warning"> Seguir comprando</button>
            </Link>
          </div>
        </div>
      ) : (
        <OrderForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default Order;