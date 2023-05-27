'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// import Scroll from 'components/Scroll/Scroll';
import { rochester400 } from '@/fonts';

import styles from './style.module.css';
import { SITE_DATA } from '@/data';
import { currencyFormat } from '@/utils';

import { MotionButton } from 'components/Button/Button';
import CartItem from './CartItem';

import OrderButton from '../Button/OrderButton';
import UnderlinedText from '../UnderlinedText/UnderlinedText';
const CART_CONTENT = [ 0, 1, 2 ];

function CartContent({ status = true, ...delegated }) {
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
  const subtotals = calculateSubtotal( newBooksList );
  
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

  return (
    <div className={`${rochester400.variable} ${styles.cartContent}`} {...delegated}>
      <motion.h4 variants={itemVariants}>Кошик:</motion.h4>
      <div className={styles.itemsList}>
        {newBooksList.map(({ id, ...props }, i) => (
          <CartItem key={i +'-'+ props.title } id={i} variants={ itemVariants } {...props} />
        ))}
      </div>

      {/* Cart footer */}
      <div className={ styles.cartFooter }>
        <motion.div className={ styles.summary } variants={ itemVariants }>
          <div>
            <span>Кіл-ть:</span>{' '}
            <span className={styles.currency}> 3 </span>
          </div>
          <div>
            <span>Всього:</span>{' '}
            <span className={styles.currency} > {currencyFormat( subtotals )} </span>
          </div>
        </motion.div>
        
        <motion.div className={styles.buttonsBlock} variants={ itemVariants }>
          <MotionButton 
            initial={{ color: 'var(--text-grey)' }}
            whileHover={{
              color: 'var(--text-dark)',
            }}
            transition={{ type: 'tween', duration: 0.3 }}
            title="Повернутись" 
            className={styles.back}
          >
            <Image src="/next-arrow.svg" width={13} height={13} alt='arrow' style={{transform: 'scale(-1)'}}/>
            <UnderlinedText preferMainColor="white">Повернутись</UnderlinedText>
          </MotionButton>

          <OrderButton />
        </motion.div>
      </div>
    </div>
  );
}

function calculateSubtotal(items) {
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.price;
  });

  return subtotal;
}

export default CartContent;
