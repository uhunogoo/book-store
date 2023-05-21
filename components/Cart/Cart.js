'use client'
import React from 'react';

import styles from './style.module.css';

import { useClickOutside } from '@/effects/useClickOutside';
import { CartIcon } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import CartContent from './CartContent';

import { animated, config, useSprings, useTransition } from '@react-spring/web';

function Cart() {
  const [active, setActive] = React.useState(false);
  const ref = useClickOutside(setActive);
  
  const [props, api] = useSprings(
    4,
    i => ({
      transform: `scale(${active ? 1 : 0})`,
      delay: active ? 300 + 300 * i : 0,
      config: config.default,
    }),
    [active]
  )

  const mainContainer = useTransition(active, {
    from: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
    enter: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
    leave: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
    config: config.default,
  });

  function handleClick() {
    setActive( !active )
  }
  
  return (
    <div ref={ref} className={styles.dropContainer}>
      <Button 
        title="cart button" 
        type="button"
        onClick={ handleClick } 
        numOfItems={1}
      >
        <CartIcon width="40" height="40" />
      </Button>
     

      {mainContainer((style, status) => (
        <>
          { status ? (
            <animated.div style={style} className={styles.cart}>
              {props.map( ({ transform }, i) => {
                const list = [ styles.lineTop, styles.lineRight, styles.lineBottom, styles.lineLeft ]
                return (
                  <animated.div className={list[i]} key={i} style={{ transform }} />
                )
              })}

              <CartContent />
            </animated.div>
          ) : null }
        </>
      ))}
    </div>
  );
}

export default Cart;
