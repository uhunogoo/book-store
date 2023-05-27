'use client'
import React from 'react';

import styles from './style.module.css';
import { useClickOutside } from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';

import { CartIcon } from '../Icons/Icons';
import { MotionBlock } from '../MotionBlock/MotionBlock';
import { MotionButton } from '../Button/Button';
import { AnimatePresence } from 'framer-motion';
import CartContent from './CartContent';

import AnimatedContent from '../DropDown/AnimatedContent';

const linesClasses = [ 
  styles.lineTop, 
  styles.lineLeft,
  styles.lineRight, 
  styles.lineBottom
];

function Cart() {
  const [ isOpen, setIsOpen ] = useToggle(false);
  const ref = useClickOutside( isOpen, setIsOpen );
  
  return (
    <MotionBlock 
      ref={ref} 
      animate={isOpen ? "open" : "closed"}
      className={styles.dropContainer}
    >
      <MotionButton
        title="Преревірити кошик" 
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={ setIsOpen } 
        numOfItems={1}
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
            <CartContent />
          </AnimatedContent>
        )}
      </AnimatePresence>
    </MotionBlock>
  );
}

export default Cart;
