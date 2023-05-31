import  React from 'react';

// import { addItem } from '@/app/actions';
import Button from 'components/Button/Button';
import { CartContext } from '../Providers/CartProvider';


function AddToCart({ sku = null }) {
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

    // if (typeof window !== "undefined") {
    //   const storedValue = window.localStorage.getItem('user-cart');
    //   const token = JSON.parse(storedValue) || [];
      
    //   const isExist = token.find(item => item.id === sku );
    //   if (isExist) return null;
      
    //   const pushedData = [...token, value.cart];
      
    //   handleCreateTodo( value.cart );
    //   return window.localStorage.setItem('user-cart', JSON.stringify(pushedData));
    // }
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