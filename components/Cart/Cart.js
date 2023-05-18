import React from 'react';
import styles from './style.module.css';
import { gsap } from 'gsap';

import { useClickOutside } from '@/effects/useClickOutside';
import { CartIcon } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import { CSSTransition } from 'react-transition-group';

function Cart() {
  const ctx = React.useMemo( () => gsap.context(() => {}), []);
  const [dropDownStatus, setDropDownStatus] = React.useState();
  const ref = useClickOutside(setDropDownStatus);

  React.useLayoutEffect(() => {
    // const animationParams = {
    //   yPercent: 140,
    //   scale: 1.1,
    //   transformOrigin: '0% 100%',
    //   bgX: 200
    // };
    ctx.add('open', (node) => {
      return gsap.from( node, { yPercent: '+=20', opacity: 0 });
    });
    ctx.add('close', (node) => {
      return gsap.to( node, { yPercent: '+=20', opacity: 0 });
    });

    return () => ctx.revert();
  }, [])
  
  const handleOnEnter = (node) => ctx.open( node );
  const handleOnExit = (node) => ctx.close( node );

  function handleClick() {
    setDropDownStatus(!dropDownStatus);
  }

  return (
    <div ref={ref} className={styles.dropContainer}>
      <Button title="cart button" type="button" onClick={ handleClick } numOfItems={1}>
        <CartIcon width="40" height="40" />
      </Button>
      <CSSTransition
        in={ dropDownStatus }
        unmountOnExit
        onEnter={handleOnEnter}
        onExit={handleOnExit}
        timeout={500}
      >
        <div className={ styles.cart }>
          Cart
        </div>
      </CSSTransition>
    </div>
  );
}

export default Cart;
