import { motion } from 'framer-motion';

function AnimatedContent({ children, className }) {
  const apllyedClass = className ? `${ className }` : '';

  return (
    <motion.div 
      className={apllyedClass}
      style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}}
      variants={{
        open: {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.6,
            delayChildren: 0.05,
            staggerDirection: 1,
            staggerChildren: 0.05
          }
        },
        closed: {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          transition: {
            type: "tween",
            ease: 'easeIn',
            bounce: 0,
            delay: 0.1,
            duration: 0.6,
            staggerDirection: -1,
            staggerChildren: 0.05
          }
        }
      }}
    >
      { children }
    </motion.div>
  );
}

function AnimatedLines({ linesClasses = [] }) {
  if ( linesClasses.length === 0 ) return null;
  const delay = 0.3; // animation delay
  const parameters ={
    stiffness: 600,
    damping: 30,
    mass: 0.2,
    bounce: 0,
  }

  const variantsTopLeft = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        delay: delay, 
        ...parameters
      }
    },
    closed: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        ...parameters,
      }
    }
  }
  const variantsBottomRight = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        delay: 0.5
      }
    },
    closed: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "tween",
        ease: 'easeIn',
        duration: 0.4,
        delay: 0
      }
    }
  }

  return (<>
    {linesClasses.map( (className, i ) => {
      const currentVariant = i < 2 ? variantsTopLeft : variantsBottomRight;
      return (
        <motion.div className={ className } key={i} variants={ currentVariant } />
      );
    })}
  </>
  )
}

AnimatedContent.AnimatedLines = AnimatedLines;
export default AnimatedContent;