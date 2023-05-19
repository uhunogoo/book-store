import Image from 'next/image';

import { Rochester } from 'next/font/google';
const rochester400 = Rochester({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--rochester'
});

import styles from './style.module.css';
import Button from '../Button/Button';
import { Favorite } from '../Icons/Icons';
import Link from 'next/link';
import { currencyFormat } from '@/utils';

function ProductCard({ image, title, subtitle, slug, price, ...delegated }) {
  if (!image) {
    console.error( 'please check your image prop' );
    return;
  }

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
            <Button 
              className={ styles.button }
              title="Дадати в улюблене" 
              type="button"
            >
              <Favorite color={ 'var(--text-green)' } />  
            </Button>
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
            <span style={{fontFamily: 'var(--rochester)'}}>{ currencyFormat.format( price) }</span>
          </div>
          <Button title="Купити" visual="outline">
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
      alt={ image.title } 
      title={ `${ image.title }, зображення` } 
    />
  );
}

export default ProductCard;