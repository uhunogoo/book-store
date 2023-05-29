'use client'
import React from 'react';

import { MotionBlock } from 'components/MotionBlock/MotionBlock';
import CartItem from 'components/Cart/CartItem';
import CartBody from 'components/Cart/CartBody';
import CartCheckout from '@/components/Cart/CartCheckout';
import { CartContext } from '@/components/CartProvider/CartProvider';

export default function Cart() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <CartBody style={{ border: 0 }}>
      <MotionBlock tag="h2">Кошик:</MotionBlock>
      
      {cartItems.length > 0 ? ( 
        <>
          <CartBody.ProductList>
            {cartItems.map(({id, ...props}, i) =>
              <CartItem key={ id } id={i} {...props} />
            )}
          </CartBody.ProductList>
          <CartCheckout items={cartItems} />
        </> 
      ) : 'Ваш кошик порожній' }
      
    </CartBody>
  )
}