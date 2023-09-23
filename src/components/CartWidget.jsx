import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalQuantity } = useContext(CartContext)

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <i className="bi bi-cart cart-icon"></i>
        <span className="badge bg-danger notification-badge">{totalQuantity}</span>
      </Link>

    </div>
  );
}

export default CartWidget;