'use client'
import React from 'react';
import Image from 'next/image';

import { useClickOutside } from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';

import { AnimatePresence } from 'framer-motion';

import { MotionBlock } from '../MotionBlock/MotionBlock';
import { MotionButton } from '../Button/Button';
import { CartIcon } from '../Icons/Icons';

import { CartContext } from '../Providers/CartProvider';
import CartItem from '../CartItem/CartItem';
import DropMenu from '../DropMenu/DropMenu';
import CartCheckout from '../CartCheckout/CartCheckout';
import { scaleInOut } from '@/app/lib/animationsVariants';
import { rochester400 } from '@/styles/fonts';

function Cart() {
  const { cartItems } = React.useContext(CartContext);

  const [subtotal, counts] = calculateSubtotal( cartItems );
  const [ isOpen, setIsOpen ] = useToggle(false);
  const ref = useClickOutside( isOpen, setIsOpen );
  
  return (
    <MotionBlock 
      ref={ref} 
      animate={isOpen ? "open" : "closed"}
      style={{ position: 'relative' }}
    >
      <MotionButton
        key={ counts }
        title="Преревірити кошик" 
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={ setIsOpen } 
        numOfItems={counts}
      >
        <CartIcon 
          width="40" height="40" 
          color={ isOpen ? 'white' : 'var(--text-dark)' }
        />
      </MotionButton>
      <AnimatePresence>
        {isOpen && (
          <DropMenu className={ rochester400.variable }>
            { cartItems.length > 0 ? (
              <>
                <DropMenu.DropMenuTitle variants={scaleInOut}>
                  Кошик:
                </DropMenu.DropMenuTitle>
                <DropMenu.DropMenuContent scrolled={cartItems.length > 3}>
                  {cartItems.map(({id, ...props}, i) =>
                    <CartItem key={ id } id={i} variants={scaleInOut} {...props} />
                  )}
                </DropMenu.DropMenuContent>
                <CartCheckout items={cartItems} />
              </>
            ) : (
              <EmptyStatus variants={scaleInOut}/>
            )}

          </DropMenu>
        ) }
      </AnimatePresence>
    </MotionBlock>
  );
}

function EmptyStatus({ variants }) {
  return (<>
    <MotionBlock 
      tag="h2" 
      variants={variants}
      style={{ textAlign: 'center' }}
    >
      Ваш кошик порожній
    </MotionBlock>
    <MotionBlock variants={variants}>
      <Image 
        src="/owl-default.svg" 
        style={{ margin: '0 auto', opacity: 1 }}
        width={350} 
        height={350} 
        alt="owl" 
      />
    </MotionBlock>
  </>)
}

function calculateSubtotal(items) {
  let subtotal = 0;
  let counts = 0;
  
  items.forEach((item, i) => {
    subtotal += item.price * item.count;
    counts += item.count;
  });

  return [subtotal, counts];
}

export default React.memo(Cart);
