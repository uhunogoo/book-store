'use client'
import React from 'react';

export const CartContext = React.createContext();

function CartProvider({ children, cartCookie = [] }) {
  const [cartItems, setCartItems] = React.useState( cartCookie );
  console.log( cartItems )
  
  const value = React.useMemo(() => {
    return {
      cartItems, 
      setCartItems
    };
  }, [cartItems, cartCookie]);
  
  return (
    <CartContext.Provider value={{ value }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;