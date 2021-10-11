import React, { useState } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    quantity: 0,
  })

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      { children }
    </CartContext.Provider>
  );
}

export const useCart = () => React.useContext(CartContext);
