export const scaleInOut = {
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", bounce: 0, duration: 0.4 }
  },
  closed: { opacity: 0, scale: 0.96, y: 10, transition: { type: "spring", bounce: 0, duration: 0.4 } },
  hover: { 
    background: 'white', 
    transition: { type: "spring", bounce: 0, duration: 0.4 } 
  },
}
export const fadeIn = {
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", bounce: 0, duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96, 
    y: 30, 
    transition: { type: "spring", bounce: 0, duration: 0.5 } 
  },
  closed: { 
    opacity: 0, 
    scale: 0.96, 
    y: 30, 
    transition: { type: "spring", bounce: 0, duration: 0.5 } 
  },
}
export const container = {
  closed: { 
    opacity: 0, 
    y: 20, 
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delay: 0,
      when: "afterChildren",
      delayChildren: 0,
      staggerDirection: -1,
      staggerChildren: 0.05
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.4,
      delay: 0.2,
      when: "beforeChildren",
      delayChildren: 0,
      staggerDirection: 1,
      staggerChildren: 0.05
    }
  }
};