import React from 'react';
import styles from './drop-down.module.css'

function DropContent({ data, children, className = ''}, ref) {
  const newClassName = `${styles.dropDown} ${ className }`
  return (
    <div className={ styles.overlay }>
      <div ref={ref} className={ newClassName }>
        <ul className={styles.list}>
          {data?.map((item, id) => (
            <li key={id}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
}

export default React.forwardRef(DropContent);
