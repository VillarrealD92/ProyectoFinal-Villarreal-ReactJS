import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function ItemDetail({ servicio }) {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addServicio } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const servicioWithQuantity = {
            ...servicio,
            quantity: quantity
        }

        addServicio(servicioWithQuantity, quantity);
    }

    return (
        <div className="d-flex justify-content-center adjust-item-center my-5">
            <div className="card mb-3 custom-card">
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={`${process.env.PUBLIC_URL}${servicio.imagen}`} className="card-img-top fotodetail" alt={`foto_${servicio.nombre}`} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title text-center">{servicio.nombre}</h3>
                            <div className="text-center align-content-center">
                                <div>
                                    <p className="format">Formato: {servicio.formato}</p>
                                    <p className="price bg-warning">Precio: {servicio.precio}Ars</p>
                                </div>
                                <div>
                                    <h5>Contacto:</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="fa fa-paw fa-lg">
                                                Telefono: {servicio.telefono}
                                            </i>
                                        </li>
                                        <li>
                                            <i className="fa fa-paw fa-lg">
                                                Email: {servicio.email}
                                            </i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center">
                                {
                                    quantityAdded > 0 ? (
                                        <Link to='/cart' className='Option'>Terminar reserva</Link>
                                    ) : (
                                        <ItemCount initial={1} stock={servicio.stock} onAdd={handleOnAdd} />
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;