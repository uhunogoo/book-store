'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './style.module.css';

import { currencyFormat } from '@/app/lib/utils';
import { rochester400 } from '@/styles/fonts';
import AddToCart from '../AddTo/AddToCart';
import AddToFavorite from '../AddTo/AddToFavorite';
import { MotionBlock } from '../MotionBlock/MotionBlock';
import { fadeIn } from '@/app/lib/animationsVariants';
import { useWillChange } from 'framer-motion';

function ProductCard({ style, ...props }) {
  if (!props.image) {
    console.error( 'please check your image prop' );
    return;
  }
  
  const willChange = useWillChange()
  
  return(
    <MotionBlock
      style={{ willChange, ...style }} 
      variants={fadeIn}
      className={ `${rochester400.variable} ${styles.card}` }
    >
      <div className={styles.topContainer}>
        
        <ProductImageWrapper slug={props.slug}>
          <ProductImage image={ props.image }/>
        </ProductImageWrapper>

        {!!props.price && (
          <div className={ styles.actions }>
            <AddToFavorite id={ props.id } className={ styles.button } />
          </div>
        )}
      </div>
      { !!props.title && (
        <h3 className={ styles.title }>{ props.title }</h3>
      )}
      { !!props.subtitle && (
        <p className={ styles.subtitle }>{ props.subtitle }</p>
      )}
      {!!props.price && (
        <div className={ styles.footer }>
          <div className={ styles.price }>
            <span style={{fontFamily: 'var(--rochester)'}}>{ currencyFormat( props.price) }</span>
          </div>
          <AddToCart sku={ props.id } />
        </div>
      )}

    </MotionBlock>
  );
}

function ProductImageWrapper({ slug, children}) {
  const isSlug = !!slug;
  if (isSlug) {
    return (
      <Link href={`/${ slug }`} style={{display: 'block'}}>
        { children }
      </Link>
    );
  }

  return children;
}

function ProductImage({ image }) {
  const width = image.width ? image.width : 230;
  const height = image.height ? image.height : 315; 

  return (
    <Image
      className={styles.productImage} 
      src={ image.src } 
      width={width} 
      height={height} 
      style={{ height: 'auto', width: '100%' }}
      alt={ image.title } 
      title={ `${ image.title }, зображення` } 
    />
  );
}

export default ProductCard;