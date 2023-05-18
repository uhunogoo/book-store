import React from 'react';
// import { gsap } from 'gsap';
import styles from './style.module.css';
import ProductCard from 'components/ProductCard/ProductCard';

function SliderBlock({ title, listOfItems, countInView = 4, ...delegated }) {
  const isText = typeof title === 'string';
  return (
    <>
      {isText ? (
        <h2 className={ styles.title }>
          { title }
        </h2>
      ) : (
        title
      ) }
      <div className={ styles.row } {...delegated}>
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