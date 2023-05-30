'use client'
import React from 'react';
import { SITE_DATA } from '@/data';
import { getItem } from '@/app/actions';

import { current, produce } from 'immer';

const { books } = SITE_DATA; 

function reducer(todos, action) {
  return produce(todos, (draftTodos) => {
    switch (action.type) {
      case 'create-todo': {
        draftTodos.push({
          ...books[action.value.id],
          count: action.value.count,
        });
        break;
      }

      case 'toggle-todo': {
        draftTodos[action.index].isCompleted =
          !draftTodos[action.index].isCompleted;
        break;
      }

      case 'delete-todo': {
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
    async function setFromCookie() {
      const data = await getItem();
      if(data.length === 0) return;
      data.forEach((item) => {
        console.log( item )
        handleCreateTodo(item)
      });
    }
    
    setFromCookie();
  }, []);

  function handleCreateTodo(value) {
    dispatch({
      type: 'create-todo',
      value,
    });
  }

  function handleToggleTodo(index) {
    dispatch({
      type: 'toggle-todo',
      index,
    });
  }

  function handleDeleteTodo(index) {
    dispatch({
      type: 'delete-todo',
      index,
    });
  }
  
  const value = React.useMemo(() => {
    return {
      cartItems, 
      handleDeleteTodo,
      handleCreateTodo
    };
  }, [ cartItems ]);
  
  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;