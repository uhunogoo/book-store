import { MotionButton } from 'components/Button/Button';

function OrderButton({ children, style = {}, ...delegated }) {
  return (
    <MotionButton
      {...delegated}
      initial={{ 
        filter: 'drop-shadow(0px 0px 0px #afc487)', 
        color: 'var(--text-dark)' 
      }}
      whileHover={{
        color: '#ffffff',
        filter: 'drop-shadow(2px 4px 6px #afc487)'
      }}
      whileTap={{ 
        scale: 0.97, 
        filter: 'drop-shadow(1px 2px 3px #afc487)',
        transition: { type: "spring", mass: 0.5, stiffness: 300 } 
      }}
      transition={{ type: 'tween', duration: 0.3 }}
      visual="default" 
      style={{
        margin: 0,
        background: 'hsl(var(--background-green))',
        ...style
      }}
    >
      { children || 'Замовити' }
    </MotionButton>
  );
}

export default OrderButton;