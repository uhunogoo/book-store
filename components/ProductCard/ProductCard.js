'use client'
import Image from 'next/image';

import styles from './style.module.css';
import Button from '../Button/Button';
import Link from 'next/link';
import { currencyFormat } from '@/utils';
import { rochester400 } from '@/styles/fonts';
import FavoriteButton from '../Button/FavoriteButton';
import React from 'react';

function ProductCard({ image, title, subtitle, slug, price, ...delegated }) {
  const [ itemInCart, setItemInCart ] = React.useState( false );
  if (!image) {
    console.error( 'please check your image prop' );
    return;
  }
  const handleClick = async (id) => {
    const req = await fetch('/api', { 
      method: 'POST',
      body: JSON.stringify({
        cart: {
          slug: id,
          count: 1
        },
      }) 
    });
    const body = await req.json();
    console.log( body )
    setItemInCart(true);
  };

  return(
    <div
      {...delegated} 
      className={ `${rochester400.variable} ${styles.card}` }
    >
      <div className={styles.topContainer}>
        
        <ProductImageWrapper slug={slug}>
          <ProductImage image={ image }/>
        </ProductImageWrapper>

        {!!price && (
          <div className={ styles.actions }>
            <FavoriteButton title="Додати в улюблене" className={ styles.button } />
          </div>
        )}
      </div>
      { !!title && (
        <h3 className={ styles.title }>{ title }</h3>
      )}
      { !!subtitle && (
        <p className={ styles.subtitle }>{ (subtitle) }</p>
      )}
      {!!price && (
        <div className={ styles.footer }>
          <div className={ styles.price }>
            <span style={{fontFamily: 'var(--rochester)'}}>{ currencyFormat( price) }</span>
          </div>
          <Button onClick={ () => handleClick(slug) } disabled={ itemInCart } title="Купити" visual="outline">
            <span>Купити</span>
          </Button>
        </div>
      )}

    </div>
  );
}

function ProductImageWrapper({ slug, children}) {
  const isSlug = !!slug;
  if (isSlug) {
    return (
      <Link href={`/${ slug }`}>
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