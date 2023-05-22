'use client'
import React from 'react';

import styles from './style.module.css';

import { useClickOutside } from '@/effects/useClickOutside';
import { CartIcon } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import CartContent from './CartContent';

import DropContainer from './DropBlock';

const linesClasses = [ 
  styles.lineTop, 
  styles.lineLeft,
  styles.lineRight, 
  styles.lineBottom
];

function Cart() {
  const [active, setActive] = React.useState(false);
  const ref = useClickOutside(setActive);

  function handleClick() {
    setActive( current => !current )
  }
  
  return (
    <div ref={ref} className={styles.dropContainer}>
      <Button 
        title="Преревірити кошик" 
        type="button"
        onClick={ handleClick } 
        numOfItems={1}
      >
        <CartIcon width="40" height="40" />
      </Button>

      <DropContainer 
        status={active} 
        className={styles.cart}
        lines={ linesClasses }
      >
        <CartContent status={ active } />
      </DropContainer>
    </div>
  );
}

export default Cart;
