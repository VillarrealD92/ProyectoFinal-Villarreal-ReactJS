import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/client';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [servicio, setServicio] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchServicioDetail() {
      try {
        const serviciosCollection = collection(db, 'serviciosData');
        const q = query(serviciosCollection, where('id', '==', parseFloat(id)));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const servicioData = querySnapshot.docs[0].data();
          setServicio(servicioData);
        }
      } catch (error) {
        console.error('Error al obtener el servicio desde Firestore:', error);
      }
    }

    fetchServicioDetail();
  }, [id]);

  return (
    <div>
      <h2 className='my-3 text-center'>Detalle del Servicio</h2>
      <ItemDetail servicio={servicio} />
    </div>
  );
}

export default ItemDetailContainer;