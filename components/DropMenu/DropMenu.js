import CartBody from '../Cart/CartBody';
import AnimatedContent from '../DropDown/AnimatedContent';
import { MotionBlock } from '../MotionBlock/MotionBlock';
import Scroll from '../Scroll/Scroll';

import styles from './style.module.css';

const linesClasses = [ 
  styles.lineTop, 
  styles.lineLeft,
  styles.lineRight, 
  styles.lineBottom
];

function DropMenu({ children }) {
  return (
    <AnimatedContent
      className={styles.dropMenu}
      lines={ linesClasses }
    >
      <AnimatedContent.AnimatedLines linesClasses={ linesClasses } />
      <DropMenuContent>
        { children }
      </DropMenuContent>
    </AnimatedContent>
  );
}

function DropMenuContent({ isExist = false, title='', footer = false, emptyStatus, children }) {
  const empty = emptyStatus || 'Нажаль тут порожньо'
  const itemVariants = {
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

  return(
    <CartBody style={{ border: 0 }}>
      
      { isExist ? ( 
        <>
          { title && (
            <MotionBlock tag="h2" variants={itemVariants}>{title}:</MotionBlock>
          )}
          <Scroll type='always' style={{ 
            height: cartItems.length > 3 ? '480px' : '100%', 
            margin: '0 -0.8rem', 
            padding: '0 0.8rem', 
            width: 'auto',
            '--scroll-thumb-color': 'var(--text-dark)',
            '--scrollbar-size': '0.5rem'
          }}>
            <CartBody.ProductList>
              { children }
            </CartBody.ProductList>
          </Scroll>

          { footer }
        </> 
      ) : empty }
    </CartBody>
  );
}

DropMenu.DropMenuContent = DropMenuContent;

export default DropMenu;