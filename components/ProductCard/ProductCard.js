import Image from 'next/image';

import styles from './style.module.css';
import Button from '../Button/Button';
import { Favorite } from '../Icons/Icons';
import Link from 'next/link';

function ProductCard({ image, title, subtitle, slug, price, ...delegated }) {
  if (!image) {
    console.error( 'please check your image prop' );
    return;
  }

  const nf = new Intl.NumberFormat("uk", {
    style: "currency",
    currency: "UAH",
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
  });
  

  return(
    <div
      {...delegated} 
      className={ styles.card }
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
            <span>{ nf.format( price) }</span>
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