'use client'
import React from 'react';
import { SITE_DATA } from '@/data';
import { getItem } from '@/app/actions';

import { current, produce } from 'immer';

export const CartContext = React.createContext();

function CartProvider({ children }) {
  const { books } = SITE_DATA; 
  const [cartItems, setCartItems] = React.useState([]);
  
  React.useEffect(() => {
    async function setFromCookie() {
      const data = await getItem();
      
      if(data.length === 0) return;
      const nextState = produce(cartItems, (draftState) => {
        data.forEach(({id, count}) => { 
          const nextItem = books[ id ];
          nextItem.count = count;
          draftState.push( nextItem );
        })
      });
      setCartItems( nextState );
    }
    
    setFromCookie();
  }, []);
  
  function addRenderedItems({ id, count }) {
    const nextState = produce(cartItems, (draftState) => {
      const nextItem = books[ id ];
      nextItem.count = count;
      draftState.push( nextItem );
    });
    setCartItems( nextState );
  }
  function removeRenderedItems( id ) {
    const nextState = produce(cartItems, (draftState) => {
      draftState;
      console.log(current(draftState));
    });
    setCartItems( nextState );
  }

  
  const value = React.useMemo(() => {
    return {
      cartItems, 
      setCartItems,
      removeRenderedItems,
      addRenderedItems
    };
  }, [ cartItems ]);
  
  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;