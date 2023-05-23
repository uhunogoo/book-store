'use client'
import React from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.css';

import { useClickOutside } from '@/effects/useClickOutside';
import { CartIcon } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import CartContent from './CartContent';

import AnimatedContent from '../DropDown/AnimatedContent';

const linesClasses = [ 
  styles.lineTop, 
  styles.lineLeft,
  styles.lineRight, 
  styles.lineBottom
];

function Cart() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useClickOutside( setIsOpen );

  function handleClick() {
    setIsOpen( !isOpen )
  }
  
  return (
    <motion.div 
      ref={ref} 
      animate={isOpen ? "open" : "closed"}
      className={styles.dropContainer}
    >
      <Button 
        title="Преревірити кошик" 
        type="button"
        onClick={ handleClick } 
        numOfItems={1}
      >
        <CartIcon width="40" height="40" />
      </Button>

      <AnimatedContent 
        className={styles.cart}
        lines={ linesClasses }
      >
        <AnimatedContent.AnimatedLines linesClasses={ linesClasses } />
        <CartContent />
      </AnimatedContent>
    </motion.div>
  );
}

export default Cart;
