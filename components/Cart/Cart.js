'use client'
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './style.module.css';

import AnimatedContent from 'components/DropDown/AnimatedContent';
import { MotionButton } from 'components/Button/Button';
import { CartIcon } from 'components/Icons/Icons';
import CartContent from './CartContent';

import { useClickOutside } from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';

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
    <motion.div 
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
    </motion.div>
  );
}

export default Cart;
