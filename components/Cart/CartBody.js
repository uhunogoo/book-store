import { cookies } from 'next/headers';
import CartCheckout from './CartCheckout';

function CartBody() {
  const cookieStore = cookies();
  console.log( cookieStore );
  return (
    <>
      <CartCheckout />
    </>
  );
}

export default CartBody;
