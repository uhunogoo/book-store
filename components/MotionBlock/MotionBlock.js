'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Block = React.forwardRef( ({ children, tag = '', ...delegated }, ref) => {
  const Tag = tag || 'div';
  
  return (
    <Tag ref={ref} {...delegated}>
      { children }
    </Tag>
  )
})

export const MotionBlock = motion( Block );