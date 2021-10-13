import React, { useState } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    quantity: 0,
  })

  function setQuantity(quantity) {
    setCart({
      quantity: cart.quantity + quantity,
    })
  }

  function removeItem() {
    setCart({
      quantity: 0,
    })
  }

  return (
    <CartContext.Provider value={{ quantity: cart.quantity, setQuantity, removeItem }}>
      { children }
    </CartContext.Provider>
  );
}

export const useCart = () => React.useContext(CartContext);
