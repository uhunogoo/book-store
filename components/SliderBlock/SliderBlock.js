'use client'
import React from 'react';

// Swiper 
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
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
      <Swiper
        spaceBetween={0}
        slidesPerView={ countInView }
        modules={[Navigation]}
        navigation={true}
        autoHeight
        className={ styles.row }
        {...delegated}
      >
        { listOfItems?.map(( props, i) => (
          <SwiperSlide key={ i } style={{ alignSelf: 'stretch', maxWidth: `${100 / countInView}%` }}>
            <div className={ styles.rowItem } >
              <ProductCard { ...props } />
            </div>
          </SwiperSlide>
        )) }
      </Swiper>
    </>
  );
}

export default SliderBlock;