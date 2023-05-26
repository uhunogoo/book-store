'use client';
import React from 'react';
import { motion, useAnimate  } from 'framer-motion';
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

  const variants = {
    visible: (custom) => ({
      opacity: [0, 1, 0],
      x: positions[custom].x,
      y: positions[custom].y,
      rotate: positions[custom].rotate,
      transition: { 
        duration: 1 - Math.random() * 0.5,
        delay: custom * 0.2
      }
    })
  }

  return (
    <MotionButton
      {...delegated}
      animate={ clicked ? 'visible' : '' }
      onClick={ () => setClicked( !clicked ) }
      style={{
        margin: 0,
        position: 'relative',
        ...style,
      }}
    >
      <Favorite width={32} height={32} />
      {positions.map((item, id) =>
        <motion.div 
          key={ id }
          initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
          custom={ id }
          // animate="visible"
          variants={ variants }
          style={{
            position: "absolute",
            width: '100%',
            top: 0,
            left: 0,
            height: '100%',
          }}
        >
          <Favorite width={32} height={32} className="icon" />
        </motion.div>
      )}
    </MotionButton>
  );
}

export default FavoriteButton;
