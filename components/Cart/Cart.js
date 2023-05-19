import React from 'react';
import styles from './style.module.css';
import { gsap } from 'gsap';

import { useClickOutside } from '@/effects/useClickOutside';
import { CartIcon } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import { CSSTransition } from 'react-transition-group';
import CartContent from './CartContent';

function Cart() {
  const ctx = React.useMemo( () => gsap.context(() => {}), []);
  const [dropDownStatus, setDropDownStatus] = React.useState();
  const ref = useClickOutside(setDropDownStatus);

  React.useLayoutEffect(() => {
    ctx.add('open', (node) => {
      gsap.set(node, { yPercent: 100, opacity: 1 });
      return gsap.from( node, { yPercent: 120, opacity: 0 });
    });
    ctx.add('close', (node) => {
      return gsap.to( node, { yPercent: 120, opacity: 0 });
    });
    ctx.add(() => {
      gsap.config({ force3D: true })
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
      <Button 
        title="cart button" 
        type="button" 
        onClick={ handleClick } 
        numOfItems={1}
      >
        <CartIcon width="40" height="40" />
      </Button>
      <div style={{position: 'absolute', right: 0, bottom: '-1.5rem'}}>
        <CSSTransition
          in={ dropDownStatus }
          unmountOnExit
          onEnter={handleOnEnter}
          onExit={handleOnExit}
          timeout={500}
        >
          <div className={ styles.cart }>
            <CartContent />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Cart;
