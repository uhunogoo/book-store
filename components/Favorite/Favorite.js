'use client'
import React from 'react';
import Image from 'next/image';
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
  const { favoriteItems } = React.useContext(FavoriteContext);
  const [ isOpen, setIsOpen ] = useToggle(false);
  const ref = useClickOutside( isOpen, setIsOpen );
  
  return (
    <MotionBlock 
      ref={ref} 
      animate={isOpen ? "open" : "closed"}
      style={{ position: 'relative' }}
    >
      <MotionButton
        key={ favoriteItems.length }
        title="Список бажань" 
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={ setIsOpen } 
        numOfItems={favoriteItems.length}
      >
        <Favorite 
          width="40" height="40" 
          color={ isOpen ? 'white' : 'var(--text-dark)' }
        />
      </MotionButton>

      <AnimatePresence>
        {isOpen && (
          <DropMenu>
            { favoriteItems.length > 0 ? (
              <>
                <DropMenu.DropMenuTitle variants={scaleInOut}>
                  Список бажань
                </DropMenu.DropMenuTitle>
                <DropMenu.DropMenuContent columns scrolled={favoriteItems.length > 6}>
                  { favoriteItems.map(item => (
                    <Wishlist key={ item.id } variants={scaleInOut} book={ item }/>
                  ))}
                </DropMenu.DropMenuContent>
              </>
            ) : (
              <EmptyStatus/>
            )}

          </DropMenu>
        ) }
      </AnimatePresence>
    </MotionBlock>
  );
}

function EmptyStatus({ variants }) {
  return (<>
    <DropMenu.DropMenuTitle 
      variants={variants}
      style={{ textAlign: 'center' }}
    >
      Ви нічого не додали до списку
    </DropMenu.DropMenuTitle>
    <MotionBlock variants={variants}>
      <Image 
        src="/owl-default.svg" 
        style={{ margin: '0 auto', opacity: 1 }}
        width={350} 
        height={350} 
        alt="owl" 
      />
    </MotionBlock>
  </>)
}

export default React.memo(FavoriteBlock);
