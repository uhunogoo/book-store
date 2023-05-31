'use client'
import React, { Suspense } from 'react';

import styles from './style.module.css';

import { useClickOutside } from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';

import { AnimatePresence } from 'framer-motion';

import { MotionBlock } from '../MotionBlock/MotionBlock';
import { MotionButton } from '../Button/Button';
import { CartIcon } from '../Icons/Icons';

import AnimatedContent from '../DropDown/AnimatedContent';
import { CartContext } from '../CartProvider/CartProvider';
import CartCheckout from './CartCheckout';
import CartBody from './CartBody';
import CartItem from './CartItem';
import Scroll from '../Scroll/Scroll';
import Image from 'next/image';

const linesClasses = [ 
  styles.lineTop, 
  styles.lineLeft,
  styles.lineRight, 
  styles.lineBottom
];

function Cart() {
  const { cartItems } = React.useContext(CartContext);

  const [subtotal, counts] = calculateSubtotal( cartItems );
  const [ isOpen, setIsOpen ] = useToggle(false);
  const ref = useClickOutside( isOpen, setIsOpen );
  
  return (
    <MotionBlock 
      ref={ref} 
      animate={isOpen ? "open" : "closed"}
      className={styles.dropContainer}
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
          <AnimatedContent 
            className={styles.cart}
            lines={ linesClasses }
          >
            <AnimatedContent.AnimatedLines linesClasses={ linesClasses } />
            <CartContent/>
          </AnimatedContent>
        )}
      </AnimatePresence>
    </MotionBlock>
  );
}

function CartContent() {
  const { cartItems } = React.useContext( CartContext );
  const itemVariants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", bounce: 0, duration: 0.4 }
    },
    closed: { opacity: 0, scale: 0.96, y: 10, transition: { type: "spring", bounce: 0, duration: 0.4 } },
    hover: { 
      background: 'white', 
      transition: { type: "spring", bounce: 0, duration: 0.4 } 
    },
  }

  return(
    <CartBody style={{ border: 0 }}>
      
      {cartItems.length > 0 ? ( 
        <>
          <MotionBlock tag="h2" variants={itemVariants}>Кошик:</MotionBlock>
          <Scroll type='always' style={{ 
            height: cartItems.length > 3 ? '480px' : '100%', 
            margin: '0 -0.8rem', 
            padding: '0 0.8rem', 
            width: 'auto',
            '--scroll-thumb-color': 'var(--text-dark)',
            '--scrollbar-size': '0.5rem'
          }}>
            <CartBody.ProductList>
              {cartItems.map(({id, ...props}, i) =>
                <CartItem key={ id } id={i} variants={itemVariants} {...props} />
              )}
            </CartBody.ProductList>
          </Scroll>

          <CartCheckout items={cartItems} />
        </> 
      ) : <EmptyStatus variants={itemVariants} /> }
    </CartBody>
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
