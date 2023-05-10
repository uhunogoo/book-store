// "use client";
import React from 'react';
import styles from './tree.module.css';
import Image from 'next/image';

function DecoratedTree({ location = 'left' }) {
  const locationClass = styles[location] ? styles[location] : '';
  
  return (
    <div className={ `${ styles.container } ${ locationClass }` }>
      <Image src="/decor-tree.svg" width={350} height={800} alt="decor image" />
    </div>
  );
}

export default React.memo(DecoratedTree);