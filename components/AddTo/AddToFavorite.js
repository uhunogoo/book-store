'use client'
import React from 'react';
import FavoriteButton from '../Button/FavoriteButton';
import { FavoriteContext } from '../Providers/FavoriteProvider';

function AddToFavorite({ id = 0, ...delegated}) {
  const { handleCreate, handleDelete } = React.useContext( FavoriteContext );
  function handleClick(status) {
    const value = {
      liked: { id },
    };
    const addItem = async (v) => {
      const req = await fetch('/api', { 
        method: 'POST',
        body: JSON.stringify( v )
      });
      const parsed = await req.json();
      
      if( !parsed ) return;
      handleCreate( value.liked );
    }
    
    const deleteItem = async () => {
      handleDelete(id);
      const req = await fetch(`/api?name=user-liked&id=${id}`, { method: 'DELETE' });
    }
    if(status) {
      addItem( value );
    } else {
      deleteItem();
    }
  }
  return (
    <FavoriteButton 
      action={ handleClick }
      title="Додати в улюблене" 
      {...delegated}
    />
  );
}

export default AddToFavorite;