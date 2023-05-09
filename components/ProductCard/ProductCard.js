import Image from 'next/image';

import styles from './style.module.css';
import Button from '../Button/Button';

function ProductCard({ image, title, subtitle, price, ...delegated }) {
  console.log( image )
  if (!image) {
    console.error( 'please check your image prop' );
    return;
  }

  return(
    <div
      {...delegated} 
      className={ styles.card }
    >
      <Image src={ image.src } width={230} height={315} alt={ image.title } title={ `${ image.title }, зображення` } />
      { !!title && (
        <h3 className={ styles.title }>{ title }</h3>
      )}
      { !!subtitle && (
        <h4 className={ styles.subtitle }>{ subtitle }</h4>
      )}
      {!!price && (
        <div className={ styles.footer }>
          <span className={ styles.footer }>{ price }</span>
          <Button>Купити</Button>
        </div>
      )}

    </div>
  );
}

export default ProductCard;