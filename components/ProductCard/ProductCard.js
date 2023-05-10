import Image from 'next/image';

import styles from './style.module.css';
import Button from '../Button/Button';
import { Cart, Favorite } from '../Icons/Icons';

function ProductCard({ image, title, subtitle, price, ...delegated }) {
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
        <Image className={styles.productImage} src={ image.src } width={230} height={315} alt={ image.title } title={ `${ image.title }, зображення` } />
        {!!price && (
          <div className={ styles.actions }>
            <Button 
              className={ styles.button }
              type="button" 
              title="Додати до кошика"
            >
              <Cart />
            </Button>
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
          {/* <Button type="button" title="Додати до кошика">
            <Cart color={ 'var(--text-green)' }/>
          </Button> */}
        </div>
      )}

    </div>
  );
}

export default ProductCard;