'use client'
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { useClickOutside } from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';

import { MotionBlock } from '../MotionBlock/MotionBlock';
import { Favorite } from '../Icons/Icons';

import { FavoriteContext } from '../Providers/FavoriteProvider';
import { MotionButton } from '../Button/Button';
import DropMenu from '../DropMenu/DropMenu';
import Wishlist from '../Wishlist/Wishlist';
import { scaleInOut } from '@/app/lib/animationsVariants';

function FavoriteBlock({}) {
  const [ isOpen, setIsOpen ] = useToggle(false);
  const ref = useClickOutside( isOpen, setIsOpen );
  
  return (
    <MotionBlock 
      ref={ref} 
      animate={isOpen ? "open" : "closed"}
      style={{ position: 'relative' }}
    >
      <FavoriteButton isOpen={isOpen} clickHandle={setIsOpen(!isOpen)} />
      <AnimatePresence>
        { isOpen && <FavoriteContent /> }
      </AnimatePresence>
    </MotionBlock>
  );
}

export const FavoriteButton = React.forwardRef( ({ isOpen, clickHandle }, ref) => {
  const { favoriteItems } = React.useContext(FavoriteContext);
  return (
    <MotionButton
      ref={ref}
      title="Список бажань" 
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={ clickHandle } 
      numOfItems={favoriteItems.length}
    >
      <Favorite 
        width="40" height="40"
        style={{ pointerEvents: 'none' }} 
        color={ isOpen ? 'white' : 'var(--text-dark)' }
      />
    </MotionButton>
  );
})
export function FavoriteContent() {
  const { favoriteItems } = React.useContext(FavoriteContext);
  return (
    <DropMenu>
      { favoriteItems.length > 0 ? (
        <>
          <DropMenu.DropMenuTitle variants={scaleInOut}>
            Список бажань:
          </DropMenu.DropMenuTitle>
          <DropMenu.DropMenuContent columns scrolled={favoriteItems.length > 6}>
            { favoriteItems.map(item => (
              <Wishlist key={ item.id } variants={scaleInOut} book={ item }/>
            ))}
          </DropMenu.DropMenuContent>
        </>
      ) : (
        <EmptyStatus variants={scaleInOut}/>
      )}

    </DropMenu>
  )
}

function EmptyStatus({ variants }) {
  return (<>
    <DropMenu.DropMenuTitle 
      variants={variants}
      style={{ textAlign: 'center' }}
    >
      На жаль, тут порожньо
    </DropMenu.DropMenuTitle>
  </>)
}

export default React.memo(FavoriteBlock);
