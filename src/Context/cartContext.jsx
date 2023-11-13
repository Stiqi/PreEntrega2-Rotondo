import { createContext, useState } from "react";

export const CartContext = createContext();

const CartComponentContext = ({ children }) => {
  const [cantidadTotal, setCantidadTotal] = useState(0);

  return (
    <CartContext.Provider value={{ cantidadTotal, setCantidadTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartComponentContext;
