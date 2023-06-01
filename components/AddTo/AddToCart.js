'use client'
import  React from 'react';

import Button from 'components/Button/Button';
import { CartContext } from '../Providers/CartProvider';


function AddToCart({ sku = null, ...delegated}) {
  const { handleCreateTodo } = React.useContext( CartContext );
  function handleClick() {
    const value = {
      cart: { id: sku, count: 1 },
    };

    const addItem = async (v) => {
      const req = await fetch('/api', { 
        method: 'POST',
        body: JSON.stringify( v )
      });
      const parsed = await req.json();
      
      if( !parsed ) return;
      handleCreateTodo( value.cart );
    }
    addItem( value );
  }

  return (
    <Button 
      onClick={ handleClick }
      title="Купити" 
      visual="outline"
    >
      <span>Купити</span>
    </Button>
  );
}

export default AddToCart;