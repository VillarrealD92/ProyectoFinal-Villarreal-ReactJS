import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
  addServicio: () => { },
  removeServicio: () => { },
  clearCart: () => { },
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addServicio = (servicio, quantity) => {
    if (!isInCart(servicio.id)) {
      setCart((prev) => [...prev, { ...servicio, quantity }]);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
      setTotal((prevTotal) => prevTotal + quantity * servicio.precio);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeServicio = (itemId) => {
    const removedServicio = cart.find((servicio) => servicio.id === itemId);
    if (removedServicio) {
      const newCart = cart.filter((servicio) => servicio.id !== itemId);
      setCart(newCart);
      setTotalQuantity((prevTotalQuantity) =>
        prevTotalQuantity - removedServicio.quantity
      );
      setTotal((prevTotal) =>
        prevTotal - removedServicio.quantity * removedServicio.precio
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };

  const isInCart = (itemId) => {
    return cart.some((servicio) => servicio.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        total,
        addServicio,
        removeServicio,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};