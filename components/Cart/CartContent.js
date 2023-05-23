import { Rochester } from 'next/font/google';
const rochester400 = Rochester({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--rochester'
});

import React from 'react';
import Image from 'next/image';

// import Scroll from 'components/Scroll/Scroll';

import styles from './style.module.css';
import { SITE_DATA } from '@/data';
import { currencyFormat } from '@/utils';

import Button, { MotionButton } from 'components/Button/Button';
import CartItem from './CartItem';


import { motion } from 'framer-motion';
import OrderButton from '../Button/OrderButton';

const COUNT = 3;
function CartContent({ status = true, ...delegated }) {
  const { books } = SITE_DATA;
  const newBooksList = React.useMemo(() => {
    const booksList = [];

    for (let i = 0; i < COUNT; i++) {
      const { image, price, title, subtitle, slug } = books[i];
      booksList.push({
        image,
        price,
        title,
        subtitle,
        slug,
      });
    }

    return booksList;
  }, [books]);
  
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
            <span className={styles.currency} > {currencyFormat(400)} </span>
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
            <span>Повернутись</span>
          </MotionButton>

          <OrderButton />
        </motion.div>
      </div>
    </div>
  );
}

export default CartContent;
