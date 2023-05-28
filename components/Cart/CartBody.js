import React from 'react';

import styles from './style.module.css';
import { rochester400 } from '@/fonts';

function CartBody({ children, ...delegated }) {
  return (
    <div className={`${rochester400.variable} ${styles.cartContent}`} {...delegated}>
      { children } 
    </div>
  );
}

function ProductList({ children }) {
  return (
    <div className={styles.itemsList}>
      { children }
    </div>
  )
}

CartBody.ProductList = ProductList;

export default CartBody;
