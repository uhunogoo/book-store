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

function DropMenu({ children, className = ''}) {
  const delegatedClass = className || ''; 
  const applyedClass = `${styles.dropMenu} ${ delegatedClass }`
  return (
    <AnimatedContent
      className={applyedClass}
      lines={ linesClasses }
    >
      <AnimatedContent.AnimatedLines linesClasses={ linesClasses } />
      { children }
    </AnimatedContent>
  );
}

function DropMenuTitle({ children, ...delegated}) {
  return(
    <MotionBlock tag="h2" {...delegated}>
      { children }
    </MotionBlock>
  );
}
function DropMenuContent({ children, scrolled = false, columns = false }) {
  const columnStyle = { 
    display: 'grid', 
    gap: '1.5rem',
    gridTemplateColumns: '1fr 1fr 1fr' 
  };
  return (
    scrolled ?(
      <BlockWithScroll>
        <div style={ columns ? columnStyle : {} }>
          { children }
        </div>
      </BlockWithScroll>
    ) : (
        <div style={ columns ? columnStyle : {} }>
          { children }
        </div>
    )
  );
}

function BlockWithScroll({ children }) {
  return (
    <Scroll 
      type='always'
      className={styles.itemsList} 
      style={{ 
        height: '480px',
        margin: '0 -0.8rem', 
        padding: '0 0.8rem', 
        width: 'auto',
        '--scroll-thumb-color': 'var(--text-dark)',
        '--scrollbar-size': '0.5rem'
      }}
    >
      { children }
    </Scroll>
  );
}

DropMenu.DropMenuTitle = DropMenuTitle;
DropMenu.DropMenuContent = DropMenuContent;

export default DropMenu;