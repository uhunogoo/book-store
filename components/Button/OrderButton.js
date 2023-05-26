'use client'

import React from 'react';
import { MotionButton } from 'components/Button/Button';
import { motion } from 'framer-motion';

function OrderButton({ children, style = {}, ...delegated }) {
  const variants = {
    hover: {
      opacity: 0.85,
    },
    tap: {
      opacity: 0.7,
      transition: { type: "spring", bounce: 0, duration: 0.3 } 
    }
  }

  return (
    <MotionButton
      {...delegated}
      whileHover="hover"
      whileTap="tap"
      visual="default" 
      style={{
        margin: 0,
        position: 'relative',
        background: 'transparent',
        ...style
      }}
    >
      <span style={{position: 'relative', display:'inline-block', zIndex:'1'}}>
        { children || 'Замовити' }
      </span>
      <motion.div 
        variants={ variants }
        style={{ 
          height: '100%', 
          left: 0, 
          top: 0, 
          width: '100%', 
          background: 'hsl(var(--background-green))',
          position: 'absolute',
        }} 
      />
    </MotionButton>
  );
}

export default OrderButton;