'use client'
import React from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';

import { AnimatePresence } from 'framer-motion';

import { MotionBlock } from '../MotionBlock/MotionBlock';
import { Favorite } from '../Icons/Icons';

import Image from 'next/image';
import { FavoriteContext } from '../Providers/FavoriteProvider';
import DropMenu from '../DropMenu/DropMenu';
import { MotionButton } from '../Button/Button';

function FavoriteBlock({ counts = 0 }) {
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
        key={ counts }
        title="Список обраного" 
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={ setIsOpen } 
        numOfItems={counts}
      >
        <Favorite 
          width="40" height="40" 
          color={ isOpen ? 'white' : 'var(--text-dark)' }
        />
      </MotionButton>

      <AnimatePresence>
        {isOpen && (
          <DropMenu>
            <DropMenu.DropMenuContent
              title="Обране"
              isExist={ favoriteItems.length > 0 }
              emptyStatus={
                <EmptyStatus/>
              }
            >
              { favoriteItems.map(item => {
                <div>
                  { item.status }
                </div>
              })}
            </DropMenu.DropMenuContent>
          </DropMenu>
        ) }
      </AnimatePresence>
    </MotionBlock>
  );
}

function EmptyStatus({ variants }) {
  return (<>
    <MotionBlock 
      tag="h2" 
      variants={variants}
      style={{ textAlign: 'center' }}
    >
      Ви нічого не додали до списку
    </MotionBlock>
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
