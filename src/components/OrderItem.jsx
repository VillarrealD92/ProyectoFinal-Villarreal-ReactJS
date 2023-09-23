import React, { useEffect, useState } from 'react';
import { db } from '../firebase/client';
import { getDoc, doc } from 'firebase/firestore';

function OrderItem({ orderId }) {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const loadOrderData = async () => {
            try {
                const docSnapshot = await getDoc(doc(db, 'orders', orderId));
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    setOrderData(data);
                }
            } catch (error) {
                console.error('Error al cargar el pedido:', error);
            }
        };

        loadOrderData();
    }, [orderId]);

    if (!orderData) {
        return <div>Cargando...</div>;
    }

    const total = orderData.servicios.reduce((acc, servicio) => {
        return acc + servicio.precio * servicio.quantity;
    }, 0);

    return (
        <div className="order-item">
            <h6>Número de Orden: <p><b>{orderId}</b></p></h6>
            <p>Nombre: <b>{orderData.nombre}</b></p>
            <p>Email: <b>{orderData.email}</b></p>
            <p>Dirección: <b>{orderData.direccion}</b></p>
            <div className='cart-items-container'>
                <h6>Servicios reservados:</h6>
                {orderData.servicios.map((servicio, index) => (
                    <div key={index} className='cart-item border border-secondary m-3 p-3'>
                        <div className='cart-item-details'>
                            <p><b>{servicio.nombre}</b></p>
                            <p>Precio: ${servicio.precio} Ars</p>
                            <p>Categoria: {servicio.categoria}</p>
                            <p>Cantidad: {servicio.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Total debitado: ${total}</h3>
        </div>
    );
}

export default OrderItem;