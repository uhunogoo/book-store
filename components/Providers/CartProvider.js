'use client'
import React from 'react';
import { reducer } from './reducer';

export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cartItems, dispatch] = React.useReducer(reducer, []);
  React.useEffect(() => {
    const getItems = async () => {
      const req = await fetch('/api?target=user-cart', { method: 'GET' });
      const data = await req?.json();
      if (!data) return;
      const parse = JSON.parse( data.value )
      parse.forEach(item => {
        handleCreateTodo(item);
      });
    }
    getItems();
  }, []);

  function handleCreateTodo(value) {
    dispatch({
      type: 'create-cart',
      value,
    });
  }

  function handleCountItem(value) {
    dispatch({
      type: 'change-count',
      value,
    });
  }

  function handleDeleteTodo(index) {
    dispatch({
      type: 'delete-cart-item',
      index,
    });
  }
  
  const value = React.useMemo(() => {
    return {
      cartItems, 
      handleDeleteTodo,
      handleCreateTodo,
      handleCountItem,
    };
  }, [ cartItems ]);
  
  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;