import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ servicio }) => {
  const { id, nombre, precio, quantity } = servicio;
  const { removeServicio } = useContext(CartContext);

  const handleRemoveClick = () => {
    removeServicio(id);
  };

  return (
    <div className="cart-item border border-secondary m-3 p-3">
      <div className="cart-item-details">
        <h4>{nombre}</h4>
        <p>Precio: ${precio} Ars</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <button onClick={handleRemoveClick} className="btn btn-danger">Eliminar</button>
    </div>
  );
};

export default CartItem;