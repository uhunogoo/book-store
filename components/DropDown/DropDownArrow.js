import { motion } from 'framer-motion';
import React from 'react';

function DropDownArrow({ opened, type = "catalog", ...delegated }) {
  const status = opened || false;
  const stroke = {
    stroke: (status && type === "catalog") ? 'white' : "var(--text-dark)", 
    strokeWidth: 2
  }
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
  
  return (
    <motion.div animate={status ? "animate" : "initial" } {...delegated}>
      <svg viewBox='0 0 40 40' height={100} width={100} fill='none'>
        <g>
          <motion.path 
            d="M2 2 L20 20 L38 2" 
            variants={ arrow } 
            pathLength="1"
            {...stroke}
          />
          {type === "catalog" && <CatalogClose stroke={stroke} />}
          {type === "options" && <OptionsClose stroke={stroke} />}
        </g>
      </svg>
    </motion.div>
  )
}

function CatalogClose({ stroke = {} }) {
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
  return (<>
    {/* top-right / bottom-left */}
    <motion.line 
      x1={2} y1={2} x2={38} y2={38} 
      variants={ lines }
      strokeDasharray="0 1"
      pathLength="0"
      {...stroke}
      />
    {/* top-left / bottom-right */}
    <motion.line 
      x1={38} y1={2} x2={2} y2={38} 
      variants={ lines }
      strokeDasharray="0 1"
      pathLength="0"
      {...stroke}
    />
  </>);
}
function OptionsClose({ stroke = {} }) {
  const lines = {
    initial: {
      pathLength: 0,
      transition: {
        duration: 0.2
      }
    },
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.2, delay: 0.3
      }
    }
  };
  return (<>
    <motion.path 
      d="M2 38 L20 20 L38 38" 
      variants={ lines } 
      strokeDasharray="0 1"
      pathLength="0"
      {...stroke}
    />
  </>);
}

export default DropDownArrow;