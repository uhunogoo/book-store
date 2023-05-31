'use client'
import React from 'react';
import { reducer } from './reducer';

export const FavoriteContext = React.createContext();

function FavoriteProvider({ children }) {
  const [favoriteItems, dispatch] = React.useReducer(reducer, []);
  React.useEffect(() => {
    const getItems = async () => {
      const req = await fetch('/api?target=user-favorite', { method: 'GET' });
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

  function handleDeleteTodo(index) {
    dispatch({
      type: 'delete-cart-item',
      index,
    });
  }
  
  const value = React.useMemo(() => {
    return {
      favoriteItems, 
      handleDeleteTodo,
      handleCreateTodo
    };
  }, [ favoriteItems ]);
  
  return (
    <FavoriteContext.Provider value={ value }>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;