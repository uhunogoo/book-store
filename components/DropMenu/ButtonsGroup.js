'use client'
import React from 'react';

import { MotionBlock } from '../MotionBlock/MotionBlock';
import { CartButton, CartContent } from '../Cart/Cart';
import { FavoriteButton, FavoriteContent } from '../Favorite/Favorite';
import { AnimatePresence } from 'framer-motion';
import { useClickOutside } from '@/hooks/useClickOutside';

function ButtonGroup() {
  
  const dropContent = {
    cart: <CartContent key={1} />,
    fav: <FavoriteContent key={2} />
  }
  
  const [ isOpen, setIsOpen ] = React.useState( false );
  const [ active, setActive ] = React.useState( null );
  const [ left, setLeft ] = React.useState( 0 );
  
  const cart = React.useRef();
  const fav = React.useRef();

  const buttonsContainer = useClickOutside( isOpen, setIsOpen );

  React.useEffect(() => {
    setLeft( cart.current.offsetLeft + 40);
  }, [])

  function handleClick(e, name) {
    const {target} = e;
    let status = true;
    let applyedName = name;
    if ( name === active ) {
      status = false;
      applyedName = null;
    } else {
      setLeft( target.offsetLeft + 40);
    }
    setActive( applyedName );
    setIsOpen( status );
  }

  return (<>
    <div 
      ref={buttonsContainer}
      style={{ 
        alignItems: 'center', 
        display:'flex',
        gap: '2.5rem',
      }}
    >
      <CartButton
        ref={cart} 
        isOpen={ active === 'cart' && isOpen } 
        clickHandle={(e) => handleClick(e, 'cart')} 
        />
      <FavoriteButton 
        ref={fav} 
        isOpen={ active === 'fav' && isOpen} 
        clickHandle={(e) => handleClick(e, 'fav')} 
      />
    </div>
    <div 
      style={{ 
        bottom:0, 
        left: left, 
        translate: '-100% 100%',
        position: 'absolute',
        width: '475px'
      }}
    >
      <AnimatePresence mode='wait'>
        {isOpen &&
          <MotionBlock
            layout
            animate={ isOpen ? "open" : "closed" }
            transition={{ type: 'spring', bounce: 0, duration: 0.5, delayChildren: 0 }}
          >
            <MotionBlock 
              style={{ position: 'absolute', height: '100%', width: '100%' }}
              initial={{background: 'rgba(255 ,255 ,255, 0)'}}
              animate={{background: 'rgba(255 ,255 ,255, 1)', transition: {delay: 0.5}}}
              exit={{background: 'rgba(255 ,255 ,255, 0)'}}
            />
            { dropContent[active] }
          </MotionBlock>
        }
      </AnimatePresence>
    </div>
  </>);
}

export default ButtonGroup;