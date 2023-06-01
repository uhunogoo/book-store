import Image from 'next/image';

import styles from './style.module.css';

import { MotionBlock } from 'components/MotionBlock/MotionBlock';
import Button from '../Button/Button';
import { CartIcon, Close } from '../Icons/Icons';
import { FavoriteContext } from '../Providers/FavoriteProvider';
import React from 'react';
function Wishlist({ book, variants }) {
  const { handleDelete } = React.useContext( FavoriteContext );
  function handleClick() {
    handleDelete(book.id);
    const deleteItem = async () => {
      const req = await fetch(`/api?name=user-liked&id=${book.id}`, { method: 'DELETE' });
    }
    deleteItem();
  } 

  return (
    <MotionBlock className={styles.wish} variants={variants}>
      <Button 
        className={ styles.close } 
        title="remove"
        onClick={ handleClick }
      >
        <Close width={14} height={14} />
      </Button>
      <div className={ styles.image }>
        <Image 
          src={ book.image.src } 
          width={230} height={315} 
          alt={ book.image.title } 
        />
        <Button title="придбати">
          <CartIcon width={24} height={24} />
        </Button>
      </div>
      { book.inStock ? (
        <span className={ styles.title } style={{ color: 'var(--text-green)' }}>
          Є в наявності
        </span>
      ) : (
        <span className={ styles.title } style={{ color: 'var(--text-grey)' }}>
          Немає 
        </span>
      )}
    </MotionBlock>
  )
}

export default Wishlist;