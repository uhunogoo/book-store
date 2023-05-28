import React from 'react';
import CartCheckout from './CartCheckout';
import { cookies } from 'next/headers';
import { SITE_DATA } from '@/data';
// import Button from '../Button/Button';

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

  const cookiesList = cookies();
  const cart = cookiesList.get('user-cart');
  const cartItems = cart ? JSON.parse(cart.value) : [];
  const cartList = cartItems.map( slug => 
    books.find(el => el.slug === slug)
  )
  return (
    <>
      <CartCheckout items={ cartList || [] }/>
    </>
  );
}

export default CartBody;
