import { cookies } from 'next/headers';

import { SITE_DATA } from '@/data';

import { MotionBlock } from 'components/MotionBlock/MotionBlock';
import CartItem from 'components/Cart/CartItem';
import CartBody from 'components/Cart/CartBody';
import CartCheckout from '@/components/Cart/CartCheckout';

export default function Cart() {
  const { books } = SITE_DATA;
  const cookiesList = cookies();
  const cart = cookiesList.get('user-cart');
  const cartItems = cart ? JSON.parse(cart.value) : [];

  const newBooksList = cartItems.map(({ slug: bookSlug, count }) => {
    const { 
      image, price, title, subtitle, slug 
    } = books.find( book => book.slug === bookSlug );

    return({image, price, title, subtitle, slug, count});
  });

  return (
    <CartBody style={{ border: 0 }}>
      <MotionBlock tag="h2">Кошик:</MotionBlock>
      
      {cartItems.length > 0 ? ( 
        <>
          <CartBody.ProductList>
            {newBooksList.map(({id, ...props}, i) =>
              <CartItem key={ id } id={i} {...props} />
            )}
          </CartBody.ProductList>
          <CartCheckout items={newBooksList} />
        </> 
      ) : 'Ваш кошик порожній' }
      
    </CartBody>
  )
}