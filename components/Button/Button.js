'use client';
import React from 'react';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import styles from './button.module.css';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ 
  children, 
  title, 
  numOfItems = 0, 
  className, 
  visual,
  ...delegated 
}, ref) => {

  const id = React.useId();
  const visualClassName = styles[visual] ? styles[visual] : '';
  const delegatedClassName = className ? className : '';
  const counterClass = (numOfItems > 0) ? styles.counter : ''; 
  const buttonClassName = `${delegatedClassName} ${ visualClassName } ${counterClass}`

  return (
    <button 
      ref={ref}
      key={id}
      className={ buttonClassName }
      title={title}
      {...delegated} 
    >
      {children}

      {numOfItems > 0 && (
        <span 
          key={ numOfItems }
          className={ styles.countNumber }
        >
          {numOfItems}
        </span>
      )}

      <VisuallyHidden>{title}</VisuallyHidden>
    </button>
  );
})

export const MotionButton = motion(  Button );

export default Button;
