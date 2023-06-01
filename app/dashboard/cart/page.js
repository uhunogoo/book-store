'use client'
import React from 'react';

import { rochester400 } from '@/styles/fonts';

import CartItem from '@/components/CartItem/CartItem';
import CartCheckout from '@/components/CartCheckout/CartCheckout'; 
import { CartContext } from '@/components/Providers/CartProvider';
import DropMenu from '@/components/DropMenu/DropMenu';

export default function Cart() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className={rochester400.variable}>
      <DropMenu.DropMenuTitle>
        Кошик:
      </DropMenu.DropMenuTitle>
      { cartItems.length > 0 ? (
        <>
          <DropMenu.DropMenuContent>
            {cartItems.map(({id, ...props}, i) =>
              <CartItem key={ id } id={i} {...props} />
            )}
          </DropMenu.DropMenuContent>
          <CartCheckout items={cartItems} />
        </>
      ) : (
        'ваш кошик порожній'
      )}
    </div>
  )
}