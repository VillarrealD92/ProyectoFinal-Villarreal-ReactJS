import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="text-center">
                <h1>Agrega SERVICIOS a tu cuenta</h1>
                <Link to="/">
                    <button className="btn btn-success">Productos</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="text-center">
            <div className="cart-items-container">
                {cart.map((servicio) => (
                    <CartItem key={servicio.id} servicio={servicio} />
                ))}
            </div>
            <div>
                <h3>Total: ${total} Ars</h3>
            </div>
            <div className="text-center">
                <Link to="/order" className="text-reset">
                    <button className="btn btn-success">Proceder al Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default Cart;