import React from 'react';
import styles from './drop-down.module.css'
import Link from 'next/link';

function DropContent({ data, children, className = ''}, ref) {
  const newClassName = `${styles.dropDown} ${ className }`
  return (
    <div className={ styles.overlay }>
      <div ref={ref} className={ newClassName }>
        <ul className={styles.list}>
          {data?.map((item, id) => (
            <li key={id}>
              <Link href="/catalog">{item.title}</Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
}

export default React.forwardRef(DropContent);
