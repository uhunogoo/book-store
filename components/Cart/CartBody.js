'use client'
// import { cookies } from 'next/headers';
import React from 'react';
import CartCheckout from './CartCheckout';
// import { cookies } from 'next/headers';
import { SITE_DATA } from '@/data';

const CART_CONTENT = [ 0, 1, 2 ];
function CartBody() {
  const { books } = SITE_DATA;
  const newBooksList = CART_CONTENT.map( itemID => {
    const { image, price, title, subtitle, slug } = books[itemID];
    return({
      image,
      price,
      title,
      subtitle,
      slug,
    });
  });
  
  const handleClick = async () => {
    const res = await fetch('/api', { 
      method: 'POST',
      body: JSON.stringify({
        bookId: 'text'
      }) 
    });
  };


  return (
    <>
      <CartCheckout items={[]}/>
    </>
  );
}

export default CartBody;
