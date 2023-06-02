'use client'
import  React from 'react';

import Button from 'components/Button/Button';
import { CartContext } from '../Providers/CartProvider';


function AddToCart({ sku = null, ...delegated}) {
  const { handleCreateTodo, cartItems } = React.useContext( CartContext );
  const itemIndex = cartItems?.findIndex(item => item.id === sku);
  const exist = itemIndex >= 0;
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
      <span>
        {exist ? 'У кошику' : 'Купити' }
      </span>
    </Button>
  );
}

export default AddToCart;