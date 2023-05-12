import React from 'react';
// import { gsap } from 'gsap';
import styles from './style.module.css';
import ProductCard from '@/components/ProductCard/ProductCard';

function SliderBlock({ title, listOfItems, countInView = 4, ...delegated }) {
  return (
    <>
      <h2 className={ styles.title }>
        { title }
      </h2>
      <div className={ styles.row } >
        { listOfItems?.map(({id, ...props }, i) => (
          <div key={ i } className={ styles.rowItem } style={{ flex: `0 0 ${ 100 / countInView }%` }}>
            <ProductCard { ...props } />
          </div>
        )) }
      </div>
    </>
  );
}

export default SliderBlock;