'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionButton } from './Button';
import { Favorite } from 'components/Icons/Icons';
import { range } from '@/utils';

function FavoriteButton({ style = {}, ...delegated }) {
  const [clicked, setClicked] = React.useState( false );
  
  const positions = range(10).map(item => {
    const r = 40;
    const alpha = Math.PI * 2 * Math.random();
    const x = Math.cos(alpha) * r; 
    const y = Math.sin(alpha) * r;

    const rotate = 180 * (Math.random() - 0.5);
    return { x, y, rotate };
  });


  return (
    <MotionButton
      {...delegated}
      animate={ clicked ? 'liked' : 'unliked' }
      onClick={ () => setClicked( !clicked ) }
      initial={ false }
      style={{
        margin: 0,
        position: 'relative',
        ...style,
      }}
      >
      <MainIcon />
      <AnimatePresence mode='wait'>
        { clicked && <Particles positions={ positions } />}
      </AnimatePresence>
    </MotionButton>
  );
}

function MainIcon() {
  const mainIconVariants = {
    liked: {
      // '--text-dark': '#ffe54a',
      '--text-dark': 'var(--text-green)',
      scale: 1.1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: 'backOut',
        when: 'beforeChildren'
      }
    },
    unliked: {
      scale: [null, 0.5, null, 0.9],
      x: [null, -4, 8, 0],
      transition: {
        type: "tween",
        ease: 'easeOut',
        duration: 0.25,
        when: 'afterChildren'
      }
    },
  }
  return (
    <motion.div variants={mainIconVariants} >
      <Favorite width={32} height={32} />
    </motion.div>
  )
}

function Particles({ positions = [] }) {
  if (positions.length === 0) return null;
  const variants = {
    liked: (custom) => ({
      opacity: [0, 1, 0],
      x: positions[custom].x,
      y: positions[custom].y,
      rotate: positions[custom].rotate,
      transition: { 
        duration: (1 - Math.random() * 0.25) * 0.45,
        delay: custom * 0.025,
      }
    })
  };

  return (<>
    { positions.map((item, id) =>
      <motion.div 
        key={ id }
        custom={ id }
        variants={ variants }
        initial={{ 
          opacity: 0, 
          scale: 0.3, 
          x: 0, 
          y: 0,
          position: "absolute",
          width: '100%',
          top: 0,
          left: 0,
          height: '100%',
        }}
      >
        <Favorite width={32} height={32} color={'var(--text-green)'} visible={true} className="icon" />
      </motion.div>
    ) }
  </>);
}

export default FavoriteButton;
