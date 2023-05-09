import React from 'react';
import styles from './drop-down.module.css'

function DropContent({ data, children }, ref) {
  return (
    <div ref={ref} className={styles.dropDown}>
      <ul className={styles.list}>
        {data?.map((item, id) => (
          <li key={id}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default React.forwardRef(DropContent);
