import { createContext, useState } from "react";

export const CartContext = createContext();

const CartComponentContext = ({ children }) => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <CartContext.Provider value={{ cantidad, setCantidad }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartComponentContext;
