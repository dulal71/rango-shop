"use client";

import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider value={{ isOpen, openCart, closeCart, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


export const useCart = () => useContext(CartContext);