import { motion } from 'framer-motion';
import React from 'react';

function DropDownArrow({ opened }) {
  const status = opened || false;
  const arrow = {
    initial: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 0.2,
        delay: 0.4
      }
    },
    animate: {
      pathLength: 0,
      pathOffset: 1,
      transition: {
        duration: 0.2
      }
    }
  };
  const lines = {
    initial: {
      pathLength: 0,
      pathOffset: 1,
      transition: {
        duration: 0.2
      }
    },
    animate: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 0.2, delay: 0.4
      }
    }
  };

  return (
    <svg viewBox='0 0 40 40' height={100} width={100} fill='none'>
      <g>
        <motion.path 
          d="M2 2 L20 20 L38 2" 
          pathLength="1"
          stroke="var(--text-dark)" 
          strokeWidth={2} 
          initial={ false }
          animate={status ? "animate" : "initial" }
          variants={ arrow } 
        />
        {/* top-right / bottom-left */}
        <motion.line 
          x1={2} y1={2} x2={38} y2={38} 
          pathLength="1"
          stroke="var(--text-dark)" 
          strokeWidth={2} 
          initial="initial"
          animate={status ? "animate" : "initial" }
          variants={ lines }
        />
        {/* top-left / bottom-right */}
        <motion.line 
          x1={38} y1={2} x2={2} y2={38} 
          stroke="var(--text-dark)" 
          strokeWidth={2} 
          initial="initial"
          animate={status ? "animate" : "initial" }
          variants={ lines }
        />
      </g>
    </svg>
  )
}

export default DropDownArrow;