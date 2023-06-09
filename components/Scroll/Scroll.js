'use client';
import styles from './style.module.css'; 
import * as ScrollArea from '@radix-ui/react-scroll-area';

function Scroll({children, ...delegated}) {
  return (
    <ScrollArea.Root className={styles.ScrollAreaRoot} {...delegated}>
      <ScrollArea.Viewport className={styles.ScrollAreaViewport} >
        { children }
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar className={styles.ScrollAreaScrollbar} orientation="vertical">
        <ScrollArea.Thumb className={styles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
} 

export default Scroll;