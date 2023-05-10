import styles from './style.module.css';
import ProductCard from '@/components/ProductCard/ProductCard';

function SliderBlock({ title, listOfItems }) {
  return (
    <>
      <h2 className={ styles.title }>
        { title }
      </h2>

      <div className={ styles.row }>
        { listOfItems?.map(({id, ...props }) => (
          <ProductCard key={ id } { ...props } style={{ maxWidth: '230px' }} />
        )) }
      </div>
    </>
  );
}

export default SliderBlock;