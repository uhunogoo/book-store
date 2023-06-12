'use client'
import React from 'react';
import { reducer } from './reducer';

export const FavoriteContext = React.createContext();

function FavoriteProvider({ children }) {
  const [favoriteItems, dispatch] = React.useReducer(reducer, []);
  React.useEffect(() => {
    const getItems = async () => {
      const req = await fetch('/api?target=user-liked', { method: 'GET' });
      const data = await req?.json();
      if (!data) return;
      const parse = JSON.parse( data.value )
      dispatch({
        type: 'create-list',
        value: parse,
      });
    }
    getItems();
  }, [dispatch]);

  function handleAddItem(value) {
    dispatch({
      type: 'add-to-list',
      value,
    });
  }

  function handleDelete(id) {
    dispatch({
      type: 'delete-fav-item',
      id,
    });
  }
  
  const value = React.useMemo(() => {
    return {
      favoriteItems, 
      handleDelete,
      handleAddItem
    };
  }, [ favoriteItems ]);
  
  return (
    <FavoriteContext.Provider value={ value }>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;