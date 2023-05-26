'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionButton } from './Button';
import { Favorite } from 'components/Icons/Icons';
import { range } from '@/utils';

function FavoriteButton({ style = {}, ...delegated }) {
  const positions = React.useMemo(() => {
    return range(6).map(item => {
      const x = (Math.random() - 0.5) * 100; 
      const y = - Math.random() * 50 - 50;
      const rotate = 180 * (Math.random() - 0.5)
      return { x, y, rotate };
    });
  }, []);
  const [clicked, setClicked] = React.useState( false );

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
    initital: {scale: 0, rotate: 0, x: 0},
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
      x: [null, -5, 10, 0],
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
  const variants = React.useMemo(() => ({
    liked: (custom) => ({
      opacity: [0, 1, 0],
      x: positions[custom].x,
      y: positions[custom].y,
      rotate: positions[custom].rotate,
      transition: { 
        duration: (1 - Math.random() * 0.5) * 0.5,
        delay: custom * 0.075,
      }
    })
  }), []);

  return (<>
    { positions.map((item, id) =>
      <motion.div 
        key={ id }
        custom={ id }
        variants={ variants }
        initial={{ 
          opacity: 0, 
          scale: 0.5, 
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
