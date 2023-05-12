import Image from 'next/image';

import styles from './style.module.css';
import Button from '../Button/Button';
import { Favorite } from '../Icons/Icons';

function ProductCard({ image, title, subtitle, price, ...delegated }) {
  if (!image) {
    console.error( 'please check your image prop' );
    return;
  }

  const width = image.width ? image.width : 230 
  const height = image.height ? image.height : 315 

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
        <Image
          className={styles.productImage} 
          src={ image.src } 
          width={width} 
          height={height} 
          alt={ image.title } 
          title={ `${ image.title }, зображення` } 
        />
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

export default ProductCard;