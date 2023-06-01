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