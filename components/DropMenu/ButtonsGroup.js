'use client'
import Button, { MotionButton } from 'components/Button/Button';
import { MotionBlock } from '../MotionBlock/MotionBlock';
import { CartIcon, Favorite } from '../Icons/Icons';
import React from 'react';
import { CartContent } from '../Cart/Cart';
import { FavoriteContent } from '../Favorite/Favorite';
import { AnimatePresence } from 'framer-motion';

function ButtonGroup() {
  const [ isOpen, setIsOpen ] = React.useState( false );
  const [ active, setActive ] = React.useState( null );
  const [ left, setLeft ] = React.useState( 0 );
  
  const cart = React.useRef();
  const fav = React.useRef();

  React.useEffect(() => {
    setLeft( cart.current.offsetLeft + 40);
  }, [])

  function handleClick(e, name) {
    const {target} = e;
    setLeft( target.offsetLeft + 40);
    setActive( name );
    setIsOpen( true );
  }
  return (<>
    <MotionButton
      ref={cart}
      title="Преревірити кошик" 
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={(e) => handleClick(e, 'cart')}
      // numOfItems={counts}
    >
      <CartIcon
        width="40" height="40" 
        style={{ pointerEvents: 'none' }} 
        color={ isOpen ? 'white' : 'var(--text-dark)' }
      />
    </MotionButton>

    <Button ref={fav} onClick={(e) => handleClick(e, 'fav')}>
      <Favorite 
        width="40" height="40" 
        style={{ pointerEvents: 'none' }}
        color={ isOpen ? 'white' : 'var(--text-dark)' }
      />
    </Button>

    <MotionBlock 
      style={{ 
        // background: 'red', 
        bottom:0, 
        left: left, 
        translate: '-100% 100%',
        position: 'absolute' 
      }} 
      layout
    >
      <MotionBlock
        animate={isOpen ? "open" : "closed"}
        style={{ position: 'relative' }}
      >
        <AnimatePresence mode='wait'>
          {active === 'cart' && <CartContent key={1} />}
          {active === 'fav' && (<FavoriteContent key={2} />)}
        </AnimatePresence>
      </MotionBlock>
    </MotionBlock>
  </>);
}

export default ButtonGroup;