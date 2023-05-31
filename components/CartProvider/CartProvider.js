'use client'
import React from 'react';
import { SITE_DATA } from '@/data';
import { produce } from 'immer';

const { books } = SITE_DATA; 

function reducer(todos, action) {
  return produce(todos, (draftTodos) => {
    switch (action.type) {
      case 'create-cart': {
        draftTodos.push({
          ...books[action.value.id],
          count: Number(action.value.count),
        });
        break;
      }

      case 'change-count': {
        draftTodos[action.value.index].count = action.value.count
        break;
      }

      case 'delete-cart-item': {
        draftTodos.splice(action.index, 1);
        break;
      }
    }
  });
}
export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cartItems, dispatch] = React.useReducer(reducer, []);
  React.useEffect(() => {
    const getItems = async () => {
      const req = await fetch('/api', { method: 'GET' });
      const data = await req.json();
      if (!data) return;
      const parse = JSON.parse( data.value )
      parse.forEach(item => {
        handleCreateTodo(item);
      });
      console.log( parse )
    }
    getItems()

    // const storedValue = window.localStorage.getItem('user-cart');
    // const token = JSON.parse(storedValue) || false;
    // if ( !token ) return;
    // token.forEach((item) => {
    //   handleCreateTodo(item)
    // });
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